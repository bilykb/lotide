const assert = require('chai').assert;
const eqArrays = require("../eqArrays");
 
describe("#eqArrays", () => {
  it('should return true when comparing the arrays [1, 2, 3] and [1, 2, 3]', () => {

    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
  });
  it('should return false when comparing [1, 2, 3] to ["1", "2", "3"]', () => {

    assert.deepStrictEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false)
  });
  it('should return false when comparing [1, 2, 3] to [3, 2, 1', () => {

    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it('should return true when comparing ["1", "2", "3"] to ["1", "2", "3"]', () => {
    
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  it('should return false when comparing [1, 2, 3, 4] to [1, 2, 3]', () => {

    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
  });
  it('should return true if both arrays are empty', () => {

    assert.deepEqual(eqArrays([], []), true);
  });
  it('should throw an error if first argument is not an array', () => {

    assert.throw(() => {
      eqArrays("hello", [1, 2, 3])
    });
  }, Error);
  it('should throw an error if second argument is not an array', () => {

    assert.throw(() => {
      eqArrays([1, 2, 3], "hello")
    }, Error);
  });
});