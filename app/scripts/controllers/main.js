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
/*
    $scope.newThing = {
      "group.id":4,
      "name":"test2_temp76",
      "serial":"test2_tem76",
      "fields":[
        {
          "symbol":"C",
          "timeSeries":false,
          "unit":"centigrados",
          "name":"temperatura",
          "id":43,
          "type":4,
          "typeLabel":"Number(float)"
        }
      ],
      "thingType.id":8,
      "childrenIdList":[
      ]
    };

*/
    /*******************************/

    var createThing = function(){
      thing.putThing($scope.newThing, function(data){
        console.log("vamos a ver");
        console.log(data);
      });
    };

//createThing();
//    $scope.paramField = {
//      "value": ''
//    };

  /*var  updateField = function(){
    thing.setField(function(data){
      console.log(data);

    },56, 391, $scope.paramField);

  };

    updateField();
*/

    setInterval(function () {
      $http.get('scripts/data.json').success(function (data) {
        //Convert data to array.
        //datos lo tenemos disponible en la vista gracias a $scope
        $scope.datos = data[0].temperature;
        //console.log(JSON.stringify($scope.datos,null,4));
        console.log($scope.datos);

        $scope.paramField = {
          "value": $scope.datos
        };
        thing.setField(function(data){
          console.log(data);

        },56, 391, $scope.paramField);


      });
    }, 1000);






    console.log("First");
  thing.loadDataAll({},function(data){
    //console.log(JSON.stringify(data,null,4));
   });
    /*$http.get('scripts/data.json').success(function (data) {
      //Convert data to array.
      //datos lo tenemos disponible en la vista gracias a $scope
      $scope.datos = data;
      console.log(JSON.stringify($scope.datos,null,4));
    });*/

     /*   setInterval(function () {
            $http.get('scripts/data.json').success(function (data) {
                //Convert data to array.
                //datos lo tenemos disponible en la vista gracias a $scope
                $scope.datos = data;
                //console.log(JSON.stringify($scope.datos,null,4));
                //console.log($scope.datos);
            });
        }, 800);
*/
        //location.reload();
    //datosResource lo tenemos disponible en la vista gracias a $scope
//    $scope.datosResource = dataResource.get();
//    console.log(JSON.stringify($scope.datos,null,4));


  });
