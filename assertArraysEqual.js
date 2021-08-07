/**
 * a function which utilizes aqArrays.js to compare two arrays for an exact match, then prints to console a pass or fail assertion
 * @param {array} arr1
 * @param {array} arr2
 * Console.log(Assertion pass or fail)
 */

const eqArrays = require("./eqArrays")

const assertArraysEqual = function(arr1, arr2) {

  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};