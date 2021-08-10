const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {
  it('should return an array of desired elements removed', () => {

    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it('should return the desired array when asked to remove [1, 2, "3"] from ["1", "2", "3"]', () => {

    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
  });
  it('should remove no elements from [1, 2, 3] if provided []', () => {

    assert.deepEqual(without([1, 2, 3], []), [1, 2, 3]);
  });
  it('should throw an error if either argument is not an array', () => {

    assert.throw(() => {
      without("hello", "will robinson");
    }, Error);
  });
});