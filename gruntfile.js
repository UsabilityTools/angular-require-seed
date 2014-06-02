module.exports = function (grunt) {

    var deployTo = grunt.option('deployTo');
    var appName = grunt.option('appName');
    var appBuild = null;
    var env = grunt.option('env') || 'dist';

    if (!appName) {
        grunt.fail.fatal('Please provide appName property');
    }

    if (deployTo) {
        deployTo = deployTo.replace(/\\/g, '');
    }

    grunt.loadTasks('Gruntfile/vendor/grunt-browserify-wrap');
    grunt.loadTasks('Gruntfile/vendor/grunt-ngmin/tasks');

    grunt.loadTasks('Gruntfile/' + appName + '/' + env + '/tasks');
    require('load-grunt-tasks')(grunt);

    var commonConfig = {
        src: [
            'Gruntfile/common/*.js',
                'Gruntfile/' + appName + '/dist/*.js',
                'Gruntfile/' + appName + '/' + env + '/*.js'
        ]
    };

    var options = {
        config: commonConfig,
        conf: {
            target: '_build' + '/' + appName,
            temp: '_build/_temp',
            deployTo: deployTo,
            deployPath: '/opt/devel/seed',
            appPath: 'apps',
            appName: appName,
            appBuild: appBuild
        }
    };

    var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);

};
