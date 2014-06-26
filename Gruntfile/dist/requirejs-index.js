module.exports = {
    'app': {
        options: {
            base: '<%= conf.appPath %>/app',
            dest: '<%= conf.target %>/app/index.js'
        },
        files: [{
            expand: true,
            cwd: '<%= conf.appPath %>/app',
            src: [
                '**/{directives,services,filters}/*/*.js',
                '**/*.controller.js',
                '**/*.directive.js',
                '**/helpers/*/*.js',
                '!**/*.module.js',
                '!**/*.spec.js'
            ]
        }]
    }
};