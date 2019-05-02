const _ = {

  clamp(number, lower, upper){
    var lowerClampedValue = Math.max(number, lower);
   var clampedValue = Math.min(lowerClampedValue, upper);
   return clampedValue;
  },

  inRange(number, start, end){
    if(end === undefined){
      end = start
      start = 0
    }
    if(start > end){
      var temp = end
      end = start
      start = temp
    } var isInRange = start <= number && number < end
    return isInRange
  },


  words(string){
    const words = string.split(' ');
    return words;
  },

  pad(string, length){
    if(string.length >= length){
      return string;
    };
      const startPaddingLength = Math.floor((length - string.length)/ 2);
      const endPaddingLength = length - string.length - startPaddingLength
      const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      return paddedString;

  },

  has(object, key){
    var hasValue = object[key];
    if(hasValue != undefined){
      return true;
    }return false;
  },

  invert(object){
    var invertedObj = {};
    for (var key in object){
      var originalValue = object[key];
      invertedObj = {originalValue : key}
    } return invertedObj;

  },

  findKey(object, predicate){
    for (var key in object){
      var value = object[key];
      var predicateReturnValue = predicate(value);
      if (predicateReturnValue){
        return key;
      };
      undefined
      return undefined;
    }
  },

  drop(array, n){
    if(n === undefined){
      n = 1;
    }
    let droppedArray = array.slice(n, array.length);
    return droppedArray;

  },

  dropWhile(array, predicate){
    let dropNumber = array.findIndex((element, index) => {
      return !(predicate(element, index, array));
    });
    let droppedArray = _.drop(array, dropNumber);
    return droppedArray;
  },

  chunk(array, size){
    if(size === undefined){
      size = 1;
    };
    let arrayChunks = [];
    for(let x = 0; x < array.length; x += size){
      let arrayChunk = array.slice(x, x+size);
      arrayChunks.push(arrayChunk);
    } return arrayChunks
  },

  };



// Do not write or modify code below this line.
module.exports = _;
