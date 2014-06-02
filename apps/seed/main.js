require.config({
    baseUrl: 'app',
    paths: {
        text: '../vendor/text',
        angular: '../vendor/angular.min',
        'ui.bootstrap': '../vendor/ui-bootstrap-0.11.0.min',
        'ui.router': '../vendor/angular-ui-router.min'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'ui.bootstrap': ['angular'],
        'ui.router': ['angular']
    }
});

window.name = 'NG_DEFER_BOOTSTRAP!';

require([
    'angular',
    'app',

    'ui.bootstrap',
    'ui.router'
], function (angular, app) {
    'use strict';
    angular.element().ready(function () {
        angular.resumeBootstrap([app['name']]);
    });

});