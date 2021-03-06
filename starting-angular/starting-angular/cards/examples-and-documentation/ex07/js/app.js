﻿/*global angular */

// Declare module that references our controllers.
var cardApp = angular.module('cardApp', ['ngRoute', 'cardAppControllers']).config(function ($routeProvider) {

    /*
      Inject the AngularJS routing (ngRoute) service so we can 
      access the $routeProvider reference in our routing function.
      Also inject the 'cardAppControllers' service which we will 
      define in 'controllers.js'.
     */

    'use strict';

    $routeProvider.when("/home", {
        /* When 'home' route is selected 
           use the 'list.html' template and the 'ListCtrl' controller. */
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
    }).
        // If no route is selected then use the 'home' route.
        otherwise({ redirectTo: '/home' });
});
