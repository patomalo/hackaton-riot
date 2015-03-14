'use strict';

/**
 * @ngdoc function
 * @name hackatonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackatonApp
 */
angular.module('hackatonApp')
  .controller('MainCtrl', function ($scope, ThingService, $http, dataResource) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var thing = new ThingService();
    console.log("First");
//    thing.loadDataAll({},function(data){
//      console.log(JSON.stringify(data,null,4));
//    })
    $http.get('scripts/js/data.json').success(function (data) {
      //Convert data to array.
      //datos lo tenemos disponible en la vista gracias a $scope
      $scope.datos = data;
      console.log(JSON.stringify($scope.datos,null,4));
    });
    //datosResource lo tenemos disponible en la vista gracias a $scope
//    $scope.datosResource = dataResource.get();
//    console.log(JSON.stringify($scope.datos,null,4));
  });
