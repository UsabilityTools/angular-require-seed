require.config({
    baseUrl: 'app',
    paths: {
        text: '../vendor/text',
        angular: '../vendor/angular',
        'ui.router': '../vendor/angular-ui-router',
        'restangular': '../vendor/restangular',
        'ui.bootstrap': '../vendor/angular-ui-bootstrap',
        'lodash': '../vendor/lodash',
        'angular-bootstrap-directives': '../vendor/angular-bootstrap-directives',
        'vr-player': '../../vr-player/player'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'lodash': {
            'exports': '_'
        },
        'ui.router': ['angular'],
        'restangular': ['angular', 'lodash'],
        'ui.bootstrap': ['angular'],
        'angular-bootstrap-directives': ['angular']
    }
});

require([
    'app'
]);