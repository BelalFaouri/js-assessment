if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn(arr[0],arr[1],arr[2])
    },

    speak : function(fn, obj) {
      return fn.call(obj)
    },

    functionFunction : function(str) {

      return function(str1){
        return  str + ', ' + str1
      }
    },

    makeClosures : function(arr, fn) {
  
    },

    partial : function(fn, str1, str2) {
      return fn(this,arguments)
    },

    useArguments : function() {
      var args=Array.from(arguments)
      var sum=0;
      for (var i = 0; i < args.length; i++) {
        sum+=args[i]
      }
      return sum
    },

    callIt : function(fn) {
      var args=Array.from(arguments)
      args.shift()
      return fn.apply(this,args)
    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
