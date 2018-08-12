if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      return new Promise(function(resolve,reject){
        if(value){
          resolve(value)
        }else{
          reject()
        }
      })
    },

    manipulateRemoteData : function(url) {
      return new Promise(function(resolve,reject){

        $.ajax({
          url: url,
          type: 'GET',
          success: function(data) {
            resolve(data.people)
          },
          error:function(){
            reject()
          }
        });
      })


    }
  };
});
