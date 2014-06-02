define([
    'angular',
    '../header'
], function (angular) {
    'use strict';

    return angular.module('myApp.header')
        .controller('header', function ($scope, sampleService) {
            $scope.check = 'Header enabled';
            $scope.model = new sampleService.Foo().bar;
        });

});