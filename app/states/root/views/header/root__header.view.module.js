define([
    'angular',

    'text!./root__header.view.template.html',
], function (
    angular,

    TRootHeader

    ) {
    'use strict';

    return angular.module('app.root__header.view', [

    ])
    .constant('VRootHeader', {
        template: TRootHeader,
        controller: 'app.root__header'
    });

});