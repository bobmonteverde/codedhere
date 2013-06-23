'use strict';

angular.module('codedhereApp')
  .directive('autoScroll', ['$timeout', function ($timeout) {
    return function(scope, elements) {
      scope.$watch('messages.length', function() {
        $timeout(function() {
          elements[0].scrollTop = elements[0].scrollHeight;
        });
      });
    };
  }]);
