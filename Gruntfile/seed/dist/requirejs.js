module.exports = {
    'seed': {
        options: {
            uglify2: {
                mangle: true
            },
            baseUrl: '<%= conf.target %>/app',
            mainConfigFile: '<%= conf.target %>/main.js',
            out: '<%= conf.target %>/main.js',
            name: '../main',
            optimize: 'uglify2'
        }
    }
};