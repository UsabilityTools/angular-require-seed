module.exports = (function() {

    var UglifyJs = require('./uglify-js');
    var convert = require('convert-source-map');
    var extend = require('extend');
    var async = require('async');

    var uglifySettings = {
            compress: false,
            mangle: false,
            fromString: true,
            inSourceMap: null,
            sourceMapIncludeSources: true,
            outSourceMap: 'script.js.map',
            output: {
                beautify: true,
                preamble: null
            }
        };


    function _extractSourceMap(script) {
        var regex = /\/\/[#@] sourceMappingURL=data:application\/json;base64,([a-zA-Z0-9+\/]+)={0,2}$/m,
            map = script.match(regex);

        return (map && map[1]) || undefined;
    }



    return function (grunt) {
        grunt.registerMultiTask('browserify-wrap', 'Grunt task for wrapping browserified code with preserving sourcemaps.',
            function (target) {
            var task = this;

            async.forEachSeries(task.files, function (file, next) {
                var options = task.options({
                    placeholder: '// <%= script =>'
                });

                if(grunt.file.exists(options.wrapper)) {
                    options.wrapper = grunt.file.read(options.wrapper);
                }

                var placeholder = options.placeholder;
                var wrapper = {
                        start: options.wrapper.substring(0, options.wrapper.indexOf(placeholder)),
                        end: options.wrapper.substring(options.wrapper.indexOf(placeholder) + placeholder.length)
                    };

                var script = grunt.file.read(file.src[0]);

                var originalSourceMap = _extractSourceMap(script);
                if(originalSourceMap) {
                    originalSourceMap = convert.fromJSON(
                        new Buffer(originalSourceMap, 'base64').toString()
                    );
                }

                var uglified = UglifyJs.minify(script, extend({ }, uglifySettings, {
                        inSourceMap: originalSourceMap && originalSourceMap.sourcemap,
                        output: {
                            beautify: true,
                            preamble: wrapper.start
                        }
                    }));

                var res = {
                        code: uglified.code + wrapper.end,
                        map: uglified.map && convert.fromJSON(uglified.map).toComment()
                    };

                grunt.file.write(file.dest, res.code + (res.map ? '\n' + res.map : ''));

                grunt.log.writeln('File', file.src[0], 'wrapped');

                next();

            }, this.async());
        });
    };

})();