define([
], function () {
    'use strict';

    var model = {
        example: true
    };

    return {
        active: function(path) {
            var current = model;

            return path.split('.').every(function(level) {
                return (current = current[level]);
            });
        },
        toggle: function (deps) {
            return deps.filter(function (dep) {
                return dep;
            });
        }
    };
});