/**
 * the function takeUntil() will collect items from a provided array until the callback provided returns a truthy value
 * @param {array} array that is queried
 * @param {string} string
 * @param {function} callback the function that evokes per iteration
 */

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


const takeUntil = function(array, callback) {
  const newArr = [];
  
  for (let element of array) {
    if (callback(element)) {
      return newArr;
    }
    newArr.push(element);
  }
};

// test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, element => element < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, element => element === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);