module.exports = {
    'app-bower-install-dist': {
        options: {
            execOptions: {
                cwd: '<%= conf.appPath %>'
            }
        },
        command: 'bower install --quiet --production'
    },
    'app-bootstrap-build': {
        options: {
            execOptions: {
                cwd: '<%= conf.appPath %>/vendor/angular-bootstrap'
            }
        },
        command: [
            'npm install',
            'grunt build'
        ].join(' && ')
    }
};