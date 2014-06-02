/*global describe, beforeEach, inject, module*/

define([
    'view/header/header.index'
], function () {
    'use strict';

    describe('view/header/controller Test', function () {

        beforeEach(module('seed.header'));

        beforeEach(inject(function ($rootScope, $controller) {
            this.scope = $rootScope.$new();

            $controller('seedHeader', {
                $scope: this.scope
            });

        }));

        it('Should have a defined scope', function () {
            expect(this.scope.check).toBe('Header enabled');
        });

    });
});