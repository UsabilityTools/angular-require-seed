module.exports = {
    options: {
        execOptions: {
            cwd: '<%= conf.appPath %>/<%= conf.appName %>'
        }
    },
    command: [
        'bower install '
    ].join(' && ')
};