/**
 * Created by kruiz on 14-Mar-15.
 */

'use strict';

app
  .factory('Server', function ($http, $q, $log, $cookies, $location, $rootScope) {
    // Service logic

    var Server = function(url, method){
      this.method = method;
      this.data = [];
      this.params = {};
      this.headers = {
        api_key: 'root' // para servicio local
        //api_key: 'db38a4e4f5a38bc9da1670d5c0421bcaeefffacf52acff98895f7bb19d15befa' // para la Hackaton usar esta api key
      };
      this.service = url;
    };

    Server.prototype.setData = function(data){
      this.data = data;
    };
    Server.prototype.setHeaders = function(headers){
      this.headers = headers;
    };
    Server.prototype.setParams = function(params){
      this.params = params;
      this.params.ts = new Date().getTime();  // adding timestamp to requests to avoid service response caching
    };

    Server.prototype.setService = function(service){
      this.service = service;
    };
    Server.prototype.setMethod = function(method){
      this.method = method;
    };
    Server.prototype.request = function(){
      //console.log("gets request");
      var self = this;
      var deferred = $q.defer();
      //console.log("self.service = "+self.service);
      $http({
        method: self.method,
        url:    "http://10.100.1.178:8080/riot-core-services"+ self.service, // pruebas de forma local
        //url:    "http://one.hackiot.com:8080/riot-core-services"+ self.service, // Url para la hackaton
        params: self.params,
        data:   self.data,
        headers: self.headers
      }).
        success(function (data,status,headers,config){
          $log.info('SERVER SUCCESS : '+ self.method +' -- '+ self.service);
          deferred.resolve({data:data,status:status,headers:headers,config:config});
        }).
        error(function (data,status,headers,config){
          $log.error('SERVER ERROR: '+ self.service);
          deferred.reject({data:data,status:status,headers:headers,config:config});
        });
      return deferred.promise;
    };
    return Server;
  });


