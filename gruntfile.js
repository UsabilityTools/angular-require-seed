module.exports = function (grunt) {
    'use strict';

    var deployTo = grunt.option('deployTo') || '_target';
    var appBuild = null;
    var env = grunt.option('env') || 'dist';



    if (deployTo) {
        deployTo = deployTo.replace(/\\/g, '');
    }

    grunt.loadTasks('Gruntfile/vendor/grunt-browserify-wrap');
    grunt.loadTasks('Gruntfile/vendor/grunt-requirejs-index');

    grunt.loadTasks('Gruntfile/' + env + '/tasks');
    require('load-grunt-tasks')(grunt);

    var commonConfig = {
        src: [
            'Gruntfile/common/*.js',
                'Gruntfile/dist/*.js',
                'Gruntfile/' + env + '/*.js'
        ]
    };

    var options = {
        config: commonConfig,
        conf: {
            target: '_build',
            temp: '_build/_temp',
            deployTo: deployTo,
            deployPath: '/opt/devel/user-metrics/statics/app',
            appPath: '.',
            appBuild: appBuild
        }
    };

    var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);

    // handle file deletion to trigger watchers
    grunt.event.on('watch', function (action, filepath) {
        if (action === 'deleted') {
            var fileToDelete = '<%= conf.target %>' + '/' + filepath.replace(/^app\//, '');

            console.log('deleting file', fileToDelete, '...');

            grunt.file.delete(fileToDelete);
        }
    });

    function simpleMultiTaskRunner() {
        grunt.task.run(this.data.tasks);
    }
    
    grunt.registerMultiTask('build', simpleMultiTaskRunner);

};