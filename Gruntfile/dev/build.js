module.exports = {
	'app-dev': {
		tasks: [
            'build:app-css',
            'build:app-js'
        ]
	},
	'app-js': {
		tasks: [
            'requirejs-index:app',
            'copy:app-app',
            'copy:app-vendors'
        ]
	},
	'app-css': {
		tasks: [
            'sass:app',
            'autoprefixer:app'
        ]
	}
};