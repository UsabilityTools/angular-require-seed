/*global describe, beforeEach, inject, module*/

define([
    'view/header/main'
], function () {
    'use strict';

    describe('view/header/controller Test', function () {

        beforeEach(module('myApp.header'));

        beforeEach(inject(function ($rootScope, $controller) {
            this.scope = $rootScope.$new();

            $controller('header', {
                $scope: this.scope
            });

        }));

        it('Should have a defined scope', function () {
            expect(this.scope.check).toBe('Header enabled');
        });

    });
});