/**
 * A function that accepts an array, and returns the middle index value (or values if the array has an even number of elements)
 * @param {*} arr 
 * @returns new Arr
 */

const middle = function(arr) {
  let newArr = [];
  
  if (arr.length < 3) {
    return newArr
  }
  if (arr.length % 2 === 0) {
    newArr = arr.splice(arr[(arr.length / 2) - 2],  2);
  } else {
    newArr = arr.splice(arr[(Math.ceil(arr.length / 2) - 2)], 1);
  }
  return newArr
};

const eqArrays = function(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};


assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // [3, 4]