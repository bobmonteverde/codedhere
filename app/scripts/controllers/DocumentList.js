'use strict';

angular.module('codedhereApp')
  .controller('DocumentListCtrl', ['$scope', 'angularFireCollection',
    function ($scope, angularFireCollection) {
      var docsUrl = 'https://codedhere.firebaseio.com/documents';

      $scope.documents = angularFireCollection(docsUrl);

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
        $scope.title = 'Error!'
      });
     */

  }]);
