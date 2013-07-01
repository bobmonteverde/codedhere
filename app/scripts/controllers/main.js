'use strict';

angular.module('codedhereApp')
  .controller('MainCtrl', ['$scope', 'angularFireAuth',
    function ($scope, angularFireAuth) {
      var url = 'https://codedhere.firebaseio.com/';

      angularFireAuth.initialize(url, {scope: $scope, name: "user"});

      //setTimeout(function() { console.log($scope.user, $scope.user && $scope.user.id); }, 5000);

      $scope.loginFacebook = loginFacebook;
      $scope.loginGithub = loginGithub;
      $scope.loginTwitter = loginTwitter;
      $scope.logout = logout;
      $scope.viewClass = true;
      $scope.toggleView = toggleView;

      function toggleView() { $scope.viewClass = !$scope.viewClass; }

      function loginFacebook() { angularFireAuth.login('facebook'); }
      function loginGithub() { angularFireAuth.login('github'); }
      function loginTwitter() { angularFireAuth.login('twitter'); }
      function logout() { angularFireAuth.logout(); }

    }
  ]);
