if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      var binArr=[];
      var i = 0
      while(num > 0){
        binArr[i]=num%2
        num=Math.floor(num/2)
        i++
      }
      return binArr[bit - 1]

    },

    base10: function(str) {

      return parseInt(str, 2)
    },

    convertToBinary: function(num) {
      var binArr=[];
      var i = 0
      while(num > 0){
        binArr[i]=num%2
        num=Math.floor(num/2)
        i++
      }
      return binArr.reverse().join('')
    },

    multiply: function(a, b) {
      return (a*10 + b*10)/10
    }
  };
});
