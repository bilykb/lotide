/**
 * head.js is a function that takes an array as an arguement, and returns the head of the array
 * @param {array} array
 * @returns {array[0]} first element of array
 */
const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array.length && array) {
    return array[0];
  }
  return undefined;
};


module.exports = head;