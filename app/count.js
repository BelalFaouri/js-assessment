if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  var timerId;
  return {
    count : function (start, end) {

      if(start === end){
        clearInterval(timerId)
      }
       timerId=setInterval(function(){
        console.log(start);
        start++
      }, 100);
      return {
        cancel:function(timerId){
          clearInterval(timerId)  }
      }
    }

  };
});
