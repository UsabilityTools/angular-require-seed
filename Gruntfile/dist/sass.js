module.exports = {
    'app': {
        options: {
            style: 'compressed',
            precision: 10 // Bootstrap requires it!
        },
        files: [{
            expand: true,
            cwd: '<%= conf.appPath %>/style',
            src: 'app.scss',
            dest: '<%= conf.target %>/styles',
            ext: '.css'
        }]
    }
};