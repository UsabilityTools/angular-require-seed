module.exports = {
    'seed-deploy': {
        files: [
            {
                cwd: '<%= conf.target %>',
                src: [ 'vendor/**','template/**','styles/**','app/**','*.*' ],
                dest: '<%= (conf.deployTo || conf.deployPath) %>' + '/<%= conf.appName %>',
                expand: true
            }
        ]
    }
};