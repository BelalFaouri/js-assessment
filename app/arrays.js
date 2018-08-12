if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if(arr[i] === item){
          return i;
        }
      }
      return -1
    },

    sum : function(arr) {
      var sum=0;
      for (var i = 0; i < arr.length; i++) {
        sum+=arr[i]
      }
      return sum
    },

    remove : function(arr, item) {
      var newArr=[];
      for (var i = 0; i < arr.length; i++) {
        if(arr[i] !== item){
          newArr.push(arr[i])
        }
      }
      return newArr;
    },

    removeWithoutCopy : function(arr, item) {
      for (var i = arr.length - 1; i >= 0; i--) {
        if(arr[i] === item){
          arr.splice(i,1)

        }
      }
      return arr
    },

    append : function(arr, item) {
        arr.push(item)

        return arr
    },

    truncate : function(arr) {
      arr.pop()
      return arr
    },

    prepend : function(arr, item) {
      arr.unshift(item)
      return arr
    },

    curtail : function(arr) {
      arr.shift()
      return arr
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2)
    },

    insert : function(arr, item, index) {
      arr.splice(index,0,item)
      return arr
    },

    count : function(arr, item) {
      var count=0;
      for (var i = 0; i < arr.length; i++) {
        if(arr[i] === item){
          count++
        }
      }
      return count
    },

    duplicates : function(arr) {
      var newArr=[]
      for (var i = 0; i < arr.length; i++) {
        if(newArr.indexOf(arr[i]) === -1 && (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]))){
          newArr.push(arr[i])
        }
      }
      return newArr;
    },

    square : function(arr) {
        for (var i = 0; i < arr.length; i++) {
          arr[i]*=arr[i]
        }
        return arr
    },

    findAllOccurrences : function(arr, target) {
      var numberOfOccurrences=[]
      for (var i = 0; i < arr.length; i++) {
        if(arr[i] === target){
          numberOfOccurrences.push(i)
        }
      }
      return numberOfOccurrences;
    }
  };
});
