module.exports = {
    'seed': {
        options: {
            execOptions: {
                cwd: '<%= conf.appPath %>/<%= conf.appName %>'
            }
        },
        command: [
            'bower install',
            'cd vendor/angular-bootstrap && npm install && grunt build'

        ].join(' && ')
    }
};