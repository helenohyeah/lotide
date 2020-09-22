const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it('returns the key that matches the value of a given value', () => {
    const bestTVShowsByGenre = {
      scifi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      reality: "The Bachelor",
      romance: "The Bachelor"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  
  it('returns undefined if the given value doesn\'t have a match', () => {
    const bestTVShowsByGenre = {
      scifi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      reality: "The Bachelor",
      romance: "The Bachelor"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it('returns the first key when multiple values match the given value', () => {
    const bestTVShowsByGenre = {
      scifi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire",
      reality: "The Bachelor",
      romance: "The Bachelor"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Bachelor"), "reality");
  });
});