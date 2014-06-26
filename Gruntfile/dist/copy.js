module.exports = {
    'app-app': {
        files: [
            {
                cwd: '<%= conf.appPath %>',
                src: [ 'index.html' ],
                dest: '<%= conf.target %>',
                expand: true
            },
            {
                cwd: '<%= conf.appPath %>',
                src: [ 'main.js' ],
                dest: '<%= conf.target %>',
                expand: true
            },
            {
                cwd: '<%= conf.appPath %>/app',
                src: [ '**/*' ],
                dest: '<%= conf.target %>/app',
                expand: true
            }
        ]
    },
    'app-vendors': {
        files: [
            {
                src: '<%= conf.appPath %>/vendor/requirejs/require.js',
                dest: '<%= conf.target %>/vendor/require.js'
            },
            {
                src: '<%= conf.appPath %>/vendor/requirejs-text/text.js',
                dest: '<%= conf.target %>/vendor/text.js'
            },
            {
                src: '<%= conf.appPath %>/vendor/angular/angular.js',
                dest: '<%= conf.target %>/vendor/angular.js'
            },
            {
                src: '<%= conf.appPath %>/vendor/angular-bootstrap/dist/ui-bootstrap-0.11.0.js',
                dest: '<%= conf.target %>/vendor/angular-ui-bootstrap.js'
            },
            {
                cwd: '<%= conf.appPath %>/vendor/angular-bootstrap/template',
                src: [ '**/*' ],
                dest: '<%= conf.target %>/template',
                expand: true
            },
            {
                src: '<%= conf.appPath %>/vendor/angular-router/release/angular-ui-router.js',
                dest: '<%= conf.target %>/vendor/angular-ui-router.js'
            },
            {
                src: '<%= conf.appPath %>/vendor/restangular/dist/restangular.js',
                dest: '<%= conf.target %>/vendor/restangular.js'
            },
            {
                src: '<%= conf.appPath %>/vendor/lodash/dist/lodash.js',
                dest: '<%= conf.target %>/vendor/lodash.js'
            },
            {
                cwd: '<%= conf.appPath %>/vendor/bootstrap-sass/vendor/assets/fonts',
                src: [ '**/*' ],
                expand: true,
                dest: '<%= conf.target %>/styles/'
            },
            {
                src: '<%= conf.appPath %>/vendor/angular-bootstrap-directives/dist/angular-bootstrap-directives.js',
                dest: '<%= conf.target %>/vendor/angular-bootstrap-directives.js'
            },
            {
                cwd: '<%= conf.appPath %>/fonts',
                src: [ '**/*' ],
                expand: true,
                dest: '<%= conf.target %>/fonts/'
            }
        ]
    },
    'app-tests': {
        files: [
            {
                cwd: '<%= conf.appPath %>/test',
                src: [ 'karma.conf.js' ],
                dest: '<%= conf.target %>/test',
                expand: true
            },
            {
                cwd: '<%= conf.appPath %>/test',
                src: [ 'main.js' ],
                dest: '<%= conf.target %>/test',
                expand: true
            },
            {
                cwd: '<%= conf.appPath %>/vendor/angular-mocks',
                src: [ 'angular-mocks.js' ],
                dest: '<%= conf.target %>/test/vendor',
                expand: true
            }
        ]
    },
    'app-deploy-dist': {
        files: [
            {
                cwd: '<%= conf.target %>',
                src: [ 'vendor/require.js', 'index.html', 'main.js', 'styles/**/*' ],
                dest: '<%= (conf.deployTo || conf.deployPath) %>',
                expand: true
            }
        ]
    }
};