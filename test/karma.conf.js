module.exports = function (config) {
    config.set({

        basePath: '../',
        frameworks: ['jasmine', 'requirejs'],

        files: [
            'test/main.js',
            {pattern: 'test/vendor/**/*.js', included: false},
            {pattern: 'vendor/**/*.js', included: false},
            {pattern: 'app/**/*.js', included: false},
            {pattern: 'app/**/*spec.js', included: false},

            {pattern: 'app/**/*.html', included: false}
        ],

        exclude: [
            'main.js'
        ],

        preprocessors: {
        },

        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};
