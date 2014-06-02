define([
    'angular',
    'text!./header/template.html',
    'helper/features',
    './header/module/user/main'
], function (angular, template, features) {
    'use strict';

    var header = angular.module('myApp.header', features.toggle([
        'ui.router',

        (features.data.user && 'myApp.header.user')
    ]));

    header.config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'header': {
                        template: template,
                        controller: 'header'
                    }
                }
            });
    });

    return header;

});