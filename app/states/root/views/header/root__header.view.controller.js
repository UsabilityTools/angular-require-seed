define([
    './root__header.view.module'
], function (MRootHeader) {
    'use strict';

    return MRootHeader.controller('app.root__header',
        /* @ngInject */ function ($scope) {
            $scope.title = 'Header view';
        });

});