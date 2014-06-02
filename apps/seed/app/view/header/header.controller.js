define([
    'angular',
    '../header'
], function (angular) {
    'use strict';

    return angular.module('seed.header')
        .controller('seedHeader', function ($scope, seedSampleService) {
            $scope.check = 'Header enabled';
            $scope.model = new seedSampleService.Foo().bar;
        });

});