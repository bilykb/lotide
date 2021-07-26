/**
 * a function which tallies how many times specific elements occur within an array
 * @param {array} allItems an array of strings that we need to look through
 * @param {object} itemstoCount an object specifying what to count
 */

const countOnly = function(allItems, itemsToCount) {
  const tallyObject = {};

    for (const item of allItems){
      if (itemsToCount[item]) {
        if (tallyObject[item]) {
          tallyObject[item]++
        } else {
          tallyObject[item] = 1;
        }
      }
    }
  return tallyObject
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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertArraysEqual(result1["Jason"], 1);
assertArraysEqual(result1["Karima"], undefined);
assertArraysEqual(result1["Fang"], 2);
assertArraysEqual(result1["Agouhanna"], undefined);