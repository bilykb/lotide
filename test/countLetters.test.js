const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("should return 2 when counting how many of 'h' are in the string Happy Harbour Comics", () => {
    const word = countLetters("Happy Harbour Comics");

    assert.equal(word["h"], 2);
  });
  it("should return 2 when counting how many of 'c' are in the string 'Happy Harbour Comics'", () => {
    const word = countLetters("Happy Harbour Comics");

    assert.equal(word['c'], 2);
  });
  it("should return 'undefined' when counting how many spaces", () => {
    const word = countLetters("Happy Harbour Comics");

    assert.isUndefined(word[' '], undefined);
  });
  it("should return an object of letters to see how many instances of each letter in 'happy harbour'", () => {
    const word = countLetters("Happy Harbour Comics");
    assert.deepEqual(word, {
      h: 2,
      a: 2,
      p: 2,
      y: 1,
      r: 2,
      b: 1,
      o: 2,
      u: 1,
      c: 2,
      m: 1,
      i: 1,
      s: 1
    });
  });
});