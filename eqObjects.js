/**
 * eqObjects.js a function which compares two objects to see if they are similar
 * @param {object} object1
 * @param {object} object2
 * @return {boolean}
 */

const eqArrays = require("./eqArrays");


const eqObjects = function(object1, object2) {
  const listOfKeys1 = Object.keys(object1);
  const listOfKeys2 = Object.keys(object2);

  if (listOfKeys1.length !== listOfKeys2.length) {
    return false;
  }
  
  for (const key of Object.keys(object1)) {
    const valueOfObject1 = object1[key];
    const valueOfObject2 = object2[key];
    
    if (Array.isArray(valueOfObject1) || Array.isArray(valueOfObject2)) {
      if (!eqArrays(valueOfObject1, valueOfObject2)) {
        return false;
      }
    } else if (valueOfObject1 !== valueOfObject2) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;