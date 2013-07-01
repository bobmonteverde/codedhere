'use strict';

angular.module('codedhereApp')
  .controller('MainCtrl', ['$scope', 'angularFireAuth',
    function ($scope, angularFireAuth) {
      var url = 'https://codedhere.firebaseio.com/';

      angularFireAuth.initialize(url, {scope: $scope, name: "user"});

      //setTimeout(function() { console.log($scope.user, $scope.user && $scope.user.id); }, 5000);

      $scope.login = login;
      $scope.logout = logout;

      function login() { angularFireAuth.login('twitter'); }
      function logout() { angularFireAuth.logout(); }

    }
  ]);
