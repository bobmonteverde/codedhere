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

      $scope.showSettings = false;
      $scope.toggleSettings = toggleSettings;
      $scope.showChat = false;
      $scope.toggleChat = toggleChat;

      function toggleSettings() { 
        $scope.showSettings = !$scope.showSettings;
        if ($scope.showSettings) $scope.showChat = false;
      }
      function toggleChat() {
        $scope.showChat = !$scope.showChat;
        if ($scope.showChat) $scope.showSettings = false;
      }

      function loginFacebook() { angularFireAuth.login('facebook'); }
      function loginGithub() { angularFireAuth.login('github'); }
      function loginTwitter() { angularFireAuth.login('twitter'); }
      function logout() { angularFireAuth.logout(); }

    }
  ]);
