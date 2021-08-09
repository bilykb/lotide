/**
 * this is a copy of the higher order map() method.  map() creates a new array populated with results of a callback function on every element in a specified array
 * @param {array} array accepts an array
 * @param {callback} callback callback function that changes original array
 * @returns new array
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

const map = function(array, callback) {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// test code
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const numbers = [1, 2, 3, 4, 5];
const results2 = map(numbers, num => num * 2);
assertArraysEqual(results2, [2, 4, 6, 8, 10]);

const pets = ["people", "person", "purple"];
const results3 = map(pets, x => x.toUpperCase());
assertArraysEqual(results3, ["PEOPLE", "PERSON", "PURPLE"]);

const things = [1, "2", 3, "4", 5, "6"];
const results4 = map(things, y => typeof y);
assertArraysEqual(results4, ["number", "string", "number", "string", "number", "string"]);


const objects = [{name: "Brett", age: "33"}, {name: "Sam", age: "30"}];
const results5 = map(objects, user => user.name);
assertArraysEqual(results5, ["Brett", "Sam"]);

module.exports = map;