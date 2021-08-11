/**
 * without.js is a function that accepts two arrays: the source array, and an "itemsToRemove" array.  It returns a new array with the items removed.
 * @param {arr} arr
 * @param {arr} itemsToRemove
 * @returns {arr}
 */

const without = function(arr, itemsToRemove) {
  let newArr = [];

  
  if (!Array.isArray(arr) || !Array.isArray(itemsToRemove)) {
    throw new Error("Error Will Robinson!");
  }
  
  if (itemsToRemove.length === 0) {
    return arr;
  }
  
  itemsToRemove.forEach((element2) => {
    newArr = arr.filter(element1 => element1 !== element2);
  });

  return newArr;
};

module.exports = without;