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
        'ui.bootstrap': '../vendor/ui-bootstrap-0.11.0',
        'ui.router': '../vendor/angular-ui-router',

        mocks: '../test/vendor/angular-mocks'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'ui.bootstrap': ['angular'],
        'ui.router': ['angular'],
        mocks: ['angular']
    }
});

require(['app', 'mocks'], function () {
    require(tests, function () {
        window.__karma__.start();
    });
});