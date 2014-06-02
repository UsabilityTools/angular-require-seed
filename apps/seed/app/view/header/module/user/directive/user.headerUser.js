define([
    'angular',
    'text!./user.headerUser.html',
    '../../user'
], function (angular, template) {
    'use strict';

    return angular.module('seed.header.user')
        .directive('seedHeaderUser', function () {
            return {
                template: template,
                controller: function ($scope, seedSampleService) {
                    $scope.check = 'User enabled';
                    $scope.model = new seedSampleService.Foo().bar;
                },
                scope: {}
            };
        });
});