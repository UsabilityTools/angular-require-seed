module.exports = {
    'seed': {
        files: [
            // index
            {
                cwd: '<%= conf.appPath %>/<%= conf.appName%>',
                src: [ 'index.html' ],
                dest: '<%= conf.target %>',
                expand: true
            },
            {
                cwd: '<%= conf.appPath %>/<%= conf.appName%>',
                src: [ 'main.js' ],
                dest: '<%= conf.target %>',
                expand: true
            },
            {
                cwd: '<%= conf.appPath %>/<%= conf.appName%>/app',
                src: [ 'app.js' ],
                dest: '<%= conf.target %>/app',
                expand: true
            },
            {
                cwd: '<%= conf.appPath %>/<%= conf.appName%>',
                src: [ 'app/**/*' ],
                dest: '<%= conf.target %>',
                expand: true
            },

            // vendors
            {
                cwd: '<%= conf.appPath %>/<%= conf.appName%>/vendor/requirejs',
                src: [ 'require.js' ],
                dest: '<%= conf.target %>/vendor',
                expand: true
            },
            {
                cwd: '<%= conf.appPath %>/<%= conf.appName%>/vendor/requirejs-text',
                src: [ 'text.js' ],
                dest: '<%= conf.target %>/vendor',
                expand: true
            },
            {
                cwd: '<%= conf.appPath %>/<%= conf.appName%>/vendor/angular',
                src: [ 'angular.min.js' ],
                dest: '<%= conf.target %>/vendor',
                expand: true
            },
            {
                cwd: '<%= conf.appPath %>/<%= conf.appName%>/vendor/angular-bootstrap/dist',
                src: [ 'ui-bootstrap-0.11.0.min.js' ],
                dest: '<%= conf.target %>/vendor',
                expand: true
            },
            {
                cwd: '<%= conf.appPath %>/<%= conf.appName%>/vendor/angular-bootstrap/template',
                src: [ '**/*' ],
                dest: '<%= conf.target %>/template',
                expand: true
            },
            {
                cwd: '<%= conf.appPath %>/<%= conf.appName%>/vendor/angular-router/release',
                src: [ 'angular-ui-router.min.js' ],
                dest: '<%= conf.target %>/vendor',
                expand: true
            },

            // tests
            {
                cwd: '<%= conf.appPath %>/<%= conf.appName%>/test',
                src: [ 'karma.conf.js' ],
                dest: '<%= conf.target %>/test',
                expand: true
            },
            {
                cwd: '<%= conf.appPath %>/<%= conf.appName%>/test',
                src: [ 'main.js' ],
                dest: '<%= conf.target %>/test',
                expand: true
            },
            {
                cwd: '<%= conf.appPath %>/<%= conf.appName%>/vendor/angular-mocks',
                src: [ 'angular-mocks.js' ],
                dest: '<%= conf.target %>/test/vendor',
                expand: true
            }
        ]
    },
    'seed-deploy': {
        files: [
            {
                cwd: '<%= conf.target %>',
                src: [ 'vendor/require.js', 'template/**', 'styles/**', '*.*' ],
                dest: '<%= (conf.deployTo || conf.deployPath) %>' + '/<%= conf.appName %>',
                expand: true
            }
        ]
    }
};