'use strict';

/* global Firebase: false */

angular.module('codedhereApp')
  .controller('ChatCtrl', ['$scope', '$timeout', 'angularFireCollection',
    function ($scope, $timeout, angularFireCollection) {
      var url = 'https://codedhere.firebaseio.com/chat';
      //$scope.messages = angularFireCollection(new Firebase(url).limit(50));
      $scope.messages = angularFireCollection(url);
      $scope.username = 'Guest' + Math.floor(Math.random()*101);
      $scope.addMessage = function() {
        $scope.messages.add({from: $scope.username, content: $scope.message});
        $scope.message = '';
      };
    }
  ]);
