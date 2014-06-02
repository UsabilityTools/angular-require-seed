define([
    'angular',
    'text!./headerUser.html',
    '../../user'
], function (angular, template) {
    'use strict';

    return angular.module('myApp.header.user')
        .directive('headerUser', function () {
            return {
                template: template,
                controller: function ($scope, sampleService) {
                    $scope.check = 'User enabled';
                    $scope.model = new sampleService.Foo().bar;
                },
                scope: {}
            };
        });
});