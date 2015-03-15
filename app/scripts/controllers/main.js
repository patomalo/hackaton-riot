'use strict';

/**
 * @ngdoc function
 * @name hackatonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackatonApp
 */
angular.module('hackatonApp')
  .controller('MainCtrl', function ($scope, ThingService, $http, dataResource, $location) {
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
    /*$http.get('scripts/data.json').success(function (data) {
      //Convert data to array.
      //datos lo tenemos disponible en la vista gracias a $scope
      $scope.datos = data;
      console.log(JSON.stringify($scope.datos,null,4));
    });*/

        setInterval(function () {
            $http.get('scripts/data.json').success(function (data) {
                //Convert data to array.
                //datos lo tenemos disponible en la vista gracias a $scope
                $scope.datos = data;
                console.log(JSON.stringify($scope.datos,null,4));
            });
        }, 800);




        //location.reload();



    //datosResource lo tenemos disponible en la vista gracias a $scope
//    $scope.datosResource = dataResource.get();
//    console.log(JSON.stringify($scope.datos,null,4));


  });
