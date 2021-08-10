/**
 * the function takeUntil() will collect items from a provided array until the callback provided returns a truthy value
 * @param {array} array that is queried
 * @param {function} callback the function that evokes per iteration
 * @return {array} the requested array
 */

const takeUntil = function(array, callback) {
  const newArr = [];
  
  if (!Array.isArray(array)) {
    throw new Error("Error Will Robinson!");
  };

  if (array.length === 0) {
    return [];
  }''
  for (let element of array) {
    if(typeof element === "string") {
      element = element.trim();
    }
    if (callback(element)) {
      return newArr;
    }
    newArr.push(element);
  }
};

module.exports = takeUntil;