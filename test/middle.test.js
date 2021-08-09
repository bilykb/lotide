const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {
  it('should return an empty array if an array has >= 2 length', () =>{
    const array = [];

    assert.deepEqual(middle(array), []);
  });
  it('should return an empty array if the array has a length of 2', () => {
    const array = [10, 20];
  
    assert.deepEqual(middle(array), []);
  });
  it('should return [20] for the array [10, 20, 30]', () => {
    const array = [10, 20, 30];

    assert.deepEqual(middle(array), [20]);
  });
  it('should return [30] for the array [10, 20, 30, 40, 50]', () => {
    const array = [10, 20, 30, 40, 50];

    assert.deepEqual(middle(array), [30]);
  });
  it('should return [20, 30] for the array [10, 20, 30, 40]', () => {
    const array = [10, 20, 30, 40];

    assert.deepEqual(middle(array), [20, 30]);
  });
  it('should return [30, 40] for the array [10, 20, 30, 40, 50, 60]', () => {
    const array = [10, 20, 30, 40, 50, 60];

    assert.deepEqual(middle(array), [30, 40]);
  });
  it('should return ["all", "this"] in the array ["look", "at", "all", "this", "test", "code"]', () => {
    const array = ["look", "at", "all", "this", "test", "code"];

    assert.deepEqual(middle(array), ["all", "this"]);
  });
});