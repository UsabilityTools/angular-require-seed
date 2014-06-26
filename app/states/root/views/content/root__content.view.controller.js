define([
    './root__content.view.module'
], function (MRootContent) {
    'use strict';

    return MRootContent.controller('app.root__content',
        /* @ngInject */ function ($scope) {
            $scope.description = 'Welcome to the angular-require seed by UsabilityTools!';
        });

});