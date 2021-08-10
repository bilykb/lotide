/**
 * this is a copy of the higher order map() method.  map() creates a new array populated with results of a callback function on every element in a specified array
 * @param {array} array accepts an array
 * @param {callback} callback callback function that changes original array
 * @returns new array
 */

const map = function(array, callback) {
  const results = [];
  if (!Array.isArray(array)) {
    throw new Error("Error Will Robinson!");
  }

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;