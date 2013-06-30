'use strict';

angular.module('codedhereApp')
  .controller('EditorCtrl', ['$scope', '$routeParams', '$location', '$timeout', 'angularFire', 'Firebase',
    function ($scope, $routeParams, $location, $timeout, angularFire, Firebase) {
      var id = $routeParams.id,
          url = 'https://codedhere.firebaseio.com/',
          docUrl = url + 'documents';

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
        frame.write('<style>' + $scope.doc.cssCode + '</style>');
        frame.write($scope.doc.htmlCode);
        frame.write('<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>');
        frame.write('<script>' + $scope.doc.jsCode + '</script>');
        frame.close();
      }

    }
  ]);
