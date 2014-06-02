define([
], function () {
    'use strict';

    return {
        data: {
            header: true,
            user: true
        },
        toggle: function (deps) {
            return deps.filter(function (dep) {
                return dep;
            });
        }
    };

});