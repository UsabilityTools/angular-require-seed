module.exports = {
    'seed': {
        files: [
            '<%= conf.appPath %>/<%= conf.appName%>/main.js',
            '<%= conf.appPath %>/<%= conf.appName%>/app/**/*.js',
            '<%= conf.appPath %>/<%= conf.appName%>/index.html',
            '<%= conf.appPath %>/<%= conf.appName%>/app/**/*.html'
        ],
        tasks: [
            'sass:seed',
            'copy:seed',
            'copy:seed-deploy'
        ]
    }
};