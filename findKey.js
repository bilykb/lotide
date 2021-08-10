/**
 * findKey() accepts an object and callback function.  It iterates through the object and returns the first key for which the callback returns a truthy value. If not, returns undefined.
 * @param {object} object object to inspect
 * @param {function} callback function invoked per iteration
 * @return {key} returns a key that is truthy
 */

const findKey = function(object, callback) {
  
  for (const [key, value] of Object.entries(object)) {
    if (callback(value)) {
      return key;
    }
  }
};

module.exports = findKey;