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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);