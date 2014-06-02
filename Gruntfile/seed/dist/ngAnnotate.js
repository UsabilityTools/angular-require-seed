module.exports = {
    'seed': {
        files: [
            {
                cwd: '<%= conf.target %>',
                src: [ '**/*.js' ],
                dest: '<%= conf.target %>',
                expand: true
            }
        ]
    }
};