module.exports = {
    'app': {
        files: [{
            cwd: '<%= conf.target %>',
            src: [ '**/*.js' ],
            dest: '<%= conf.target %>',
            expand: true
        }]
    }
};