module.exports = {
    'seed': {
        options: {
            style: 'compressed'
        },
        files: [
            {
                expand: true,
                cwd: '<%= conf.appPath %>/<%= conf.appName%>/style',
                src: ['app.scss'],
                dest: '<%= conf.target %>/styles',
                ext: '.css'
            }
        ]
    }
};