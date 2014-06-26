define([
    'angular',

    'states/root/root.state.module',

    'index',

    'ui.bootstrap',
    'angular-bootstrap-directives',
    'ui.router',
    'restangular'
], function (
    angular,

    MRootState

    // index

    // _uiBootstrap
    // _angularBootstrapDirectives
    // _uiRouter
    // _restangular
) {
    'use strict';

    var app = angular.module('app', [
        MRootState.name,
        'ui.router',
        'ui.bootstrap',
        'restangular',
        'angular-bootstrap-directives'
    ]);

    angular.element(document).ready(function () {
        angular.bootstrap(document, [ app.name ]);
    });


    return app;
});