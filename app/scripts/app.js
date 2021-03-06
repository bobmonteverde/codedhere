'use strict';

angular.module('codedhereApp', ['firebase', 'ui.bootstrap', 'ui.ace'])
  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

      $routeProvider
        .when('/', {
          templateUrl: '/views/main.html',
          controller: 'MainCtrl'
        })
        .when('/documentList', {
          templateUrl: '/views/documentList.html',
          controller: 'DocumentListCtrl'
        })
        .when('/document/:id', {
          templateUrl: '/views/editor.html',
          controller: 'EditorCtrl'
        })
        .when('/chat', {
          templateUrl: '/views/chat.html',
          controller: 'ChatCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true);
    }
  ]);
