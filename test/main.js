var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return /\.spec\.js$/.test(file);
}).map(function (file) {
    // create relative path from `baseUrl` for specs, without `.js`
    // i.e., instead of requiring `/base/test/appSpec.js`
    // we want to require `../test/appSpec` when the
    // baseUrl is `/base/src`
    return file.replace(/^\/base\/app\//, '').replace(/\.js$/, '');
});

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app',

    paths: {
        text: '../vendor/text',
        angular: '../vendor/angular',
        'ui.router': '../vendor/angular-ui-router',
        'restangular': '../vendor/restangular',
        'ui.bootstrap': '../vendor/angular-ui-bootstrap',
        'lodash': '../vendor/lodash',
        'angular-bootstrap-directives': '../vendor/angular-bootstrap-directives',

        mocks: '../test/vendor/angular-mocks'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'lodash': {
            'exports': '_'
        },
        'ui.router': ['angular'],
        'restangular': ['angular', 'lodash'],
        'ui.bootstrap': ['angular'],
        'angular-bootstrap-directives': ['angular'],
        mocks: ['angular']
    }
});

require(['app', 'mocks'], function () {
    require(tests, function () {
        window.__karma__.start();
    });
});