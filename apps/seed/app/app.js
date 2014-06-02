define([
    'angular',
    'view/header/header.index',
    'ui.bootstrap',
    'ui.router'
], function (angular) {
    'use strict';
    var app = angular.module('seed', [
        'ui.router',
        'ui.bootstrap',

        'seed.header'
    ]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('home');
    });

    angular.element(document).ready(function () {
        angular.bootstrap(document, [app.name]);
    });

    return app;
});