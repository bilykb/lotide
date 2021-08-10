const assert = require('chai').assert;
const map = require("../map");

describe("#map", () => {
  it("should recieve an array of numbers and return a new array of numbers multiplied by 2", () => {

    assert.deepEqual(map([1, 2, 3, 4, 5], num => num * 2), [2, 4, 6, 8, 10]);
  });
  it("should return an empty array if provided an empty array", () => {
    map([], num => num * 2), [];
  });
  it("should return an error if not provided an array", () => {

    assert.throw(() => {
      map("hello", word => word[0]);
    }, Error);
  });
});