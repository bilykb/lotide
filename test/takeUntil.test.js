const assert = require('chai').assert;
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it('should return the array [1, 2, 5, 7, 2] when given [1, 2, 5, 7, 2, -1, 2, 4, 5]', () => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];

    assert.deepEqual(takeUntil(data, element => element < 0), [1, 2, 5, 7, 2])
  });
  it('should return an empty array when given an empty array', () => {
    
    assert.deepEqual(takeUntil([], element => element < 0), [])
  });
  it('should return an error if provided anything but an array', () => {

    assert.throw(() => {
      takeUntil("not an array", element => element < 0);
    }, Error);
  });
  it('should return the correct array despite having too much whitespace', () => {
    const input = ["   I've", "been   ", "   to", "   Hollywood ", "  ,", "I've", "been", "to", "Redwood"];
    const expectedOutput = ["I've", "been", "to", "Hollywood"];

    assert.deepEqual(takeUntil(input, element => element === ","), expectedOutput);
  });
});