'use strict';

angular.module('codedhereApp')
  .controller('EditorCtrl', ['$scope', '$routeParams', '$location', 'angularFireCollection',
    function ($scope, $routeParams, $location, angularFireCollection) {
      var id = $routeParams.id,
          docUrl = 'https://codedhere.firebaseio.com/documents',
          //documentlist = angularFireCollection(docUrl);
          documentlist = new Firebase(docUrl);

      console.log('documents:', documentlist);
      console.log('location path:', $location.path());


      var blank = {
        id: '',
        title: '',
        description: '',
        htmlCode: '',
        cssCode: '',
        jsCode: ''
      };

      var documents = [
        {
          id: 1,
          title: 'Document1',
          description: 'A document description',
          htmlCode: '<strong>test</strong>',
          cssCode: 'strong { color: #f00 }',
          jsCode: '$("strong").css("font-size", "20px");'
        },
        {
          id: 2,
          title: 'Document2',
          description: 'Another document description',
          htmlCode: '<b>test</b>',
          cssCode: 'strong { color: #0f0 }',
          jsCode: '$("b").css("font-size", "30px");'
        },
        {
          id: 3,
          title: 'Document3',
          description: 'Yet another document description',
          htmlCode: '<strong>test</strong>',
          cssCode: 'strong { color: #f00 }',
          jsCode: '$("strong").css("font-size", "20px");'
        },
        {
          id: 4,
          title: 'Document4',
          description: 'One more document description',
          htmlCode: '<strong>test</strong>',
          cssCode: 'strong { color: #f00 }',
          jsCode: '$("strong").css("font-size", "20px");'
        }
      ];

      var doc = documents.filter(function(d) {
        return +d.id === +id;
      });

      $scope.doc = doc.length ? doc[0] : blank;

      $scope.$on('$viewContentLoaded', preview);

      $scope.preview = preview;
      $scope.save = save;

      function save() {

        if (id === 'new') {
          var newDoc = documentlist.push($scope.doc, function(err) {
            if (!err) {
              console.log('id:', newDoc.name());
              //TODO: figure out why this does not work at all here!!
              $location.path('/document/' + newDoc.name());
            }
          });

        }
      }

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
