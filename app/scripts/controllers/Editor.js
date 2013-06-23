'use strict';

angular.module('codedhereApp')
  .controller('EditorCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    var id = $routeParams.id;

    var blank = {
      id: '',
      name: '',
      description: '',
      htmlCode: '',
      cssCode: '',
      jsCode: ''
    };

    var documents = [
      {
        id: 1,
        name: 'Document1',
        description: 'A document description',
        htmlCode: '<strong>test</strong>',
        cssCode: 'strong { color: #f00 }',
        jsCode: '$("strong").css("font-size", "20px");'
      },
      {
        id: 2,
        name: 'Document2',
        description: 'Another document description',
        htmlCode: '<b>test</b>',
        cssCode: 'strong { color: #0f0 }',
        jsCode: '$("b").css("font-size", "30px");'
      },
      {
        id: 3,
        name: 'Document3',
        description: 'Yet another document description',
        htmlCode: '<strong>test</strong>',
        cssCode: 'strong { color: #f00 }',
        jsCode: '$("strong").css("font-size", "20px");'
      },
      {
        id: 4,
        name: 'Document4',
        description: 'One more document description',
        htmlCode: '<strong>test</strong>',
        cssCode: 'strong { color: #f00 }',
        jsCode: '$("strong").css("font-size", "20px");'
      }
    ];

    var doc = documents.filter(function(d) {
      return d.id === id;
    });

    $scope.doc = doc.length ? doc[0] : blank;


    $scope.$on('$viewContentLoaded', preview);

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
      frame.write('<script src="/components/jquery/jquery.js"></script>');
      frame.write('<script>' + $scope.doc.jsCode + '</script>');
      frame.close();
    }

  }]);
