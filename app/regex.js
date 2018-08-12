if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      if(str.match(/\d/)){
        return true
      }
      return false
    },

    containsRepeatingLetter : function(str) {
      if(str.match(/([a-z])\1+/i)){
        return true;
      }
      return false;
    },

    endsWithVowel : function(str) {
      if(str.match(/[aeiou]$/i)){
        return true
      }
      return false
    },

    captureThreeNumbers : function(str) {
      if(str.match(/(\d){3}/)){
        return str.match(/(\d){3}/)[0];
      }
      return false;
    },

    matchesPattern : function(str) {
      if(str.match(/^\d{3}[-]\d{3}[-]\d{4}$/)){
        return true
      }
      return false
    },
    isUSD : function(str) {
      if(str.match(/^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?\.\d{1,2}$/)){
        return true
      }
      return false
    }
  };
});
