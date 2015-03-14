/**
 * Created by kruiz on 14-Mar-15.
 */

'use strict';

app
  .factory('ThingService', function (Server) {
    var connectServer = function(self, success, error){
      self.server.request()
        .then(function(object){
          success(object.data)
        },function(object){
          error(object.data);
        });
    };

    var ThingService = function(id){
      this.activated = false;
      this.childrenFields = [];
      this.fields = [];
      this.id = id;
      this.name = '';
      this.serial = '';
      this.url = '/api/thing/' + id;
      this.x = '';
      this.y = '';
      this.parent = [];
      this.group = [];
      this.groupType = [];
      this.thingType = [];
      this.parentThingType = [];
      this.rules = [];
      this.server = new Server(this.url, 'GET');
    };

    ThingService.prototype.loadData = function(id, params, callback){
      var self = this;
      var key = (id)?id:this.id;
      this.server.setMethod('GET');
      this.server.setService('/api/thing/' + key);
      this.server.setParams(params);
      //setServerAttributes(self, object);
      connectServer(self, callback);
    };

    ThingService.prototype.loadDataAll = function(params, callback){
      var self = this;
      this.server.setMethod('GET');
      this.server.setService('/api/thing/');
      this.server.setParams(params);
      //setServerAttributes(self, object);
      connectServer(self, callback);
    };

    ThingService.prototype.putThing = function(data, callback, error){
      this.server.setMethod('PUT');
      this.server.setService('/api/thing');
      this.server.setData(data);
      //console.log(data);
      connectServer(this, callback, error);
    };

    ThingService.prototype.setField = function(callback, thingId, fieldId, data){
      var url = '/api/thing/' + thingId + '/field/' + fieldId;
      this.server.setMethod('POST');
      this.server.setData(data);
      this.server.setService(url);
      connectServer(this, callback);
    };

    ThingService.prototype.patchThing = function (id,object, callback){
      this.server.setMethod('PATCH');
      this.server.setService('/api/thing/'+id);
      this.server.setData(object);
      connectServer(this,callback);
    };

    ThingService.prototype.delete = function(id, callback){
      this.server.setMethod('DELETE');
      this.server.setService('/api/thing/'+this.id);
      connectServer(this,callback);
    };
    return ThingService;
  });

