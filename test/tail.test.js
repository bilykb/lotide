
const assert = require('chai').assert;
const tail = require("../tail")

describe('#tail', () => {
  it('should return ["Lighhouse", "Labs"]', () => {
    const array = ['Hello', 'Lighthouse', 'Labs'];

    assert.deepEqual(tail(array), ['Lighthouse', 'Labs']);
  });
  it('should return undefined if array is empty', () => {
    const array = [];

    assert.strictEqual(tail(array), undefined);
  });
  it('should return undefined if argument is not an array', () => {
    const array = "5";

    assert.strictEqual(tail(array), undefined);
  });
});
