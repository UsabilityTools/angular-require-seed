module.exports = {
    'app': {
        options: {
            baseUrl: '<%= conf.target %>/app',
            mainConfigFile: '<%= conf.target %>/main.js',
            out: '<%= conf.target %>/main.js',
            name: '../main',
            optimize: 'uglify2',
            paths: {
		        'vr-player': 'empty:'
		    }
        }
    }
};