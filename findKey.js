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
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 0), undefined);