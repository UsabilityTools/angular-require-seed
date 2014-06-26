define([
    'angular',

    'text!./root__footer.view.template.html'
], function (
    angular,

    TRootFooter
    ) {
    'use strict';

    return angular.module('app.root__footer.view', [ ])
    .constant('VRootFooter', {
        template: TRootFooter,
        controller: 'app.root__footer'
    });

});
