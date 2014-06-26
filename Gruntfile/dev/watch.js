module.exports = {
    'app-js': {
        options: {
            livereload: true
        },
        files: [
            '<%= conf.appPath %>/app/**/*.js',
            '<%= conf.appPath %>/app/**/*.html',
            '<%= conf.appPath %>/index.html',
            '<%= conf.appPath %>/main.js'
        ],
        tasks: [
            'clean',
            'build:app-js',
            'copy:app-deploy-dev',
            'clean'
        ]
    },
    'app-css': {
        options: {
            livereload: true
        },
        files: [
            '<%= conf.appPath %>/style/**/*.scss'
        ],
        tasks: [
            'clean',
            'build:app-css',
            'copy:app-deploy-dev',
            'clean'
        ]
    }
};