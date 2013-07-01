'use strict';

angular.module('codedhereApp')
  .controller('EditorCtrl', ['$scope', '$routeParams', '$location', '$timeout', 'angularFire', 'Firebase',
    function ($scope, $routeParams, $location, $timeout, angularFire, Firebase) {
      var id = $routeParams.id,
          url = 'https://codedhere.firebaseio.com/',
          docUrl = url + 'documents',
          blankPermissions = {public: 'r', users: [] };

      //console.log('documents:', documentlist);
      //console.log('location path:', $location.path());

      if (id === 'new') {
         id = new Firebase(docUrl).push().name();
         $location.path('/document/' + id);
         return;
      }


      var promise = angularFire(docUrl + '/' + id, $scope, 'doc', {});


      //$scope.$on('$viewContentLoaded', function() { $timeout(preview); });




      promise.then(function() {
        $timeout(preview);

        if (!$scope.doc.permissions)
          $scope.doc.permissions = angular.copy(blankPermissions);

        $scope.addUser = function () {
          //TODO: figure out why users was getting deleted entirely (maybe firebase with empty arrays automatic?
          if (!$scope.doc.permissions.users)
            $scope.doc.permissions.users = [];

          $scope.doc.permissions.users.push({'name': '', 'permissions': 'r'});
        };

        $scope.removeUser = function(user) {
          var users = $scope.doc.permissions.users;
          for (var i = 0, ii = users.length; i < ii; i++) {
            if (user === users[i]) {
              users.splice(i, 1);
            }
          }
        };


        $scope.addResource = function () {
          //TODO: figure out why users was getting deleted entirely (maybe firebase with empty arrays automatic?
          if (!$scope.doc.resources)
            $scope.doc.resources = [];

          $scope.doc.resources.push({'url': '', 'enabled': true});
        };

        $scope.removeResource = function(resource) {
          var resources = $scope.doc.resources;
          for (var i = 0, ii = resources.length; i < ii; i++) {
            if (resource === resources[i]) {
              resources.splice(i, 1);
            }
          }
        };

      });


      $scope.preview = preview;



      function preview() {

        var frame = document.getElementById('preview');
        if (frame.contentWindow) {
          frame = frame.contentWindow.document;
        } else {
          if (frame.contentDocument && frame.contentDocument.document) {
            frame = frame.contentDocument.document;
          } else {
            frame = frame.contentDocument;
          }
        }

        frame.open();
        if ($scope.doc.resources)
          $scope.doc.resources.forEach(function(src) {
            if (src.url.indexOf('.css') !== -1)
              frame.write('<link rel="stylesheet" href="' + src.url + '">');
          });
        frame.write('<style>' + $scope.doc.cssCode + '</style>');
        frame.write($scope.doc.htmlCode);
        if ($scope.doc.resources)
          $scope.doc.resources.forEach(function(src) {
            if (src.url.indexOf('.js') !== -1)
              frame.write('<script src="' + src.url + '"></script>');
          });
        frame.write('<script>' + $scope.doc.jsCode + '</script>');
        frame.close();
      }

    }
  ]);
