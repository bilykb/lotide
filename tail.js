/**
 * tail removes the first index of the array, and returns the "tail" of the array
 * @param {array} array
 * @returns array
 */

const tail = function(array) {
  const newArray = array.slice(1);

  if (array.length === 0) {
    return undefined;
  } else if (!Array.isArray(array)) {
    return undefined;
  }
  return newArray;
};

module.exports = tail;