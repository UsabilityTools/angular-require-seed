define([
    'angular',

    'common/helpers/features/features',

    './views/header/root__header.view.module',
    './views/footer/root__footer.view.module',
    './views/content/root__content.view.module',

    'ui.router',
    'restangular'
], function (
    angular,

    features,

    MRootFooterView,
    MRootHeaderView,
    MRootContentView

    // _uiRouter,
    // _restangular
    ) {
    'use strict';

    return angular.module('app.root.state', features.toggle([
        MRootHeaderView.name,
        MRootFooterView.name,
        MRootContentView.name,
        'ui.router',
        'restangular'
    ]))
    .config(function ($stateProvider, $urlRouterProvider, RestangularProvider,
        VRootHeader, VRootFooter, VRootContent) {
        $urlRouterProvider
            .rule(function($injector, $location) {
                var path = $location.path();
                var search = $location.search();

                // check to see if the path already ends in '/'
                if (path[path.length - 1] === '/') {
                    return;
                } else if (Object.keys(search).length === 0) {
                // If there was no search string / query params, return with a `/`
                    return path + '/';
                } else {
                // Otherwise build the search string and return a `/?` prefix
                    var params = [];
                    angular.forEach(search, function(v, k){
                        params.push(k + '=' + v);
                    });

                    return path + '/?' + params.join('&');
                }
            })
            .otherwise('/');

        $stateProvider
            .state('root', {
                url: '/',
                views: {
                    'header@': VRootHeader,
                    'footer@': VRootFooter,
                    'content@': VRootContent
                },
                resolve: {

                }
            });

    });

});