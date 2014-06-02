define([
    'angular',
    '../../header'
], function (angular) {
    'use strict';

    return angular.module('myApp.header')
        .factory('sampleService', function () {
            var i = 1;

            function Foo() {
                this.bar = 'Foo ' + i++;
            }

            return {
                Foo: Foo
            };
        });
});