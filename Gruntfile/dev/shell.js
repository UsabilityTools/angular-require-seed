module.exports = {
	'app-bower-install-dev': {
        options: {
            execOptions: {
                cwd: '<%= conf.appPath %>'
            }
        },
        command: 'bower install'
    }
};