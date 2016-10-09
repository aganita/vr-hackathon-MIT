'use strict';

angular.module('hackathonApp', ['ngRoute', 'firebase'])
     .controller('MainController', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        console.log('new');
     })
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
        .when('/home', {
            templateUrl: '/views/home.html',
            controller: 'HomeController',
        })
        .when('/home/:sceneId', {
            templateUrl: '/views/home.html',
            controller: 'HomeController',
        })        
        .otherwise({
            redirectTo: '/home'
        });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
});