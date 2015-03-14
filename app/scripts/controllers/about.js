'use strict';

/**
 * @ngdoc function
 * @name hackatonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hackatonApp
 */
angular.module('hackatonApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
