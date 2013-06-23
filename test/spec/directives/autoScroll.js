'use strict';

describe('Directive: autoScroll', function () {
  beforeEach(module('codedhereApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<auto-scroll></auto-scroll>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the autoScroll directive');
  }));
});
