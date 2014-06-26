define([
    'angular',

    'text!./root__content.view.template.html',

    'ui.router'
], function (
    angular,

    TRootContent

    // _uiRouter
    ) {
    'use strict';

    return angular.module('app.root__content.view', [
        'ui.router'
    ])
    .constant('VRootContent', {
        template: TRootContent,
        controller: 'app.root__content'
    });

});
