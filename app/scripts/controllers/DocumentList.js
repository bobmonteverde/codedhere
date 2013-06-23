'use strict';

angular.module('codedhereApp')
  .controller('DocumentListCtrl', ['$scope', function ($scope) {
    $scope.documents = [
      {
        id: 1,
        name: "Document1",
        description: "A document description",
        htmlCode: "<strong>test</strong>",
        cssCode: "strong { color: #f00 }",
        jsCode: "$('strong').css('font-size': '20px');"
      },
      {
        id: 2,
        name: "Document2",
        description: "Another document description",
        htmlCode: "<b>test</b>",
        cssCode: "strong { color: #0f0 }",
        jsCode: "$('b').css('font-size': '30px');"
      },
      {
        id: 3,
        name: "Document3",
        description: "Yet another document description",
        htmlCode: "<strong>test</strong>",
        cssCode: "strong { color: #f00 }",
        jsCode: "$('strong').css('font-size': '20px');"
      },
      {
        id: 4,
        name: "Document4",
        description: "One more document description",
        htmlCode: "<strong>test</strong>",
        cssCode: "strong { color: #f00 }",
        jsCode: "$('strong').css('font-size': '20px');"
      }
    ];

    /*
    // Use when backend is up and running
    $http({
      method: 'GET',
      url: '/api/documentList'
    }).
    success(function (data, status, headers, config) {
      $scope.documents = data;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!'
    });
   */

  }]);
