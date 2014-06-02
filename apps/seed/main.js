require.config({
    baseUrl: 'app',
    paths: {
        text: '../vendor/text',
        angular: '../vendor/angular',
        'ui.bootstrap': '../vendor/ui-bootstrap-0.11.0',
        'ui.router': '../vendor/angular-ui-router'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'ui.bootstrap': ['angular'],
        'ui.router': ['angular']
    }
});

require(['app']);