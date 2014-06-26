module.exports = {
    'app-deploy-dev': {
        files: [{
            cwd: '<%= conf.target %>',
            src: [ 'vendor/require.js', '**/*' ],
            dest: '<%= (conf.deployTo || conf.deployPath) %>',
            expand: true
        }]
    },
    'app-bootstrap-sources': {
        files: [{
            cwd: '<%= conf.appPath %>/',
            src: [ 'vendor/bootstrap-sass/vendor/assets/stylesheets/bootstrap/**/*.scss' ],
            dest: '<%= conf.target %>',
            expand: true
        }]
    }
};