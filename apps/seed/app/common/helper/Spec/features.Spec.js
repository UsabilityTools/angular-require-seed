define([
    'common/helper/features'
], function (features) {
    'use strict';

    describe('helper/features Test', function () {
        it('The "user" is enabled', function () {
            expect(features.data.user).toBe(true);
        });
    });

});