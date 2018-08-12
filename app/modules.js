if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
      var greeting=str1
      var name=str2
      return {
        name:name,
        greeting:greeting,
        sayIt:function(){
          return this.greeting + ', ' + this.name
        }

      }
    }
  };
});
