define([
    'angular',
    'view/header/main'
], function (angular) {
    'use strict';
    var app = angular.module('myApp', [
        'ui.router',
        'ui.bootstrap',

        'myApp.header'
    ]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('home');
    });

    return app;
});