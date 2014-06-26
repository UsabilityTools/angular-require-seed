'use strict';

var path = require('path');


module.exports = function(grunt) {

    grunt.registerMultiTask('requirejs-index',
        'Create indexes for automatically loading RequireJS modules',
        function () {

        grunt.log.writeln('indexing...\n' + grunt.log.wordlist(this.files.map(function (file) {
            return file.src;
        }), { separator: '\n' }));

        var options = this.options();
        var requirejsBase = options.base;
        var begin = 'define([\n\t';
        var end = '\n], function() { });';
        var deps = [ ];

        this.files.forEach(function (fileset) {
            deps = deps.concat(fileset.src.map(function (file) {
                return '\'' + path.relative(requirejsBase, file).replace(/\.[^\.]+$/, '') + '\'';
            }));
        });

        grunt.file.write(options.dest,
            begin + deps.join(',\n\t') + end
        );

        grunt.log.ok('Index written to file: ' + options.dest);
    });
};
