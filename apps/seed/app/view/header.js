define([
    'angular',
    'text!./header/header.template.html',
    'common/helper/features',
    './header/module/user/user.index',
    'ui.router'
], function (angular, template, features) {
    'use strict';

    var header = angular.module('seed.header', features.toggle([
        'ui.router',

        (features.data.user && 'seed.header.user')
    ]));

    header.config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'header': {
                        template: template,
                        controller: 'seedHeader'
                    }
                }
            });
    });

    return header;

});