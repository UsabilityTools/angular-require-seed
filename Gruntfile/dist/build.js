module.exports = {
	'app-dist': {
		tasks: [
            'sass:app',
            'autoprefixer:app',
            'copy:app-app',
            'copy:app-vendors',
            'ngAnnotate:app',
            'requirejs-index:app',
            'requirejs:app'
        ]
	}
};