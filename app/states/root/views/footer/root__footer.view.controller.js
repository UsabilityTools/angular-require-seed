define([
    './root__footer.view.module'
], function (MRootFooter) {
    'use strict';

    return MRootFooter.controller('app.root__footer',
        /* @ngInject */ function ($scope) {
            $scope.title = 'Footer view';
        });

});