'use strict';

describe('Controller: DocumentListCtrl', function () {

  // load the controller's module
  beforeEach(module('codedhereApp'));

  var DocumentListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DocumentListCtrl = $controller('DocumentListCtrl', {
      $scope: scope
    });
  }));

  /*
  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
  */
});
