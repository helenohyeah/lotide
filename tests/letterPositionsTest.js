const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it('returns each letter and it\'s index position given a word with no repeating letters', () => {
    assert.deepEqual(letterPositions("help"), { h: [0], e: [1], l: [2], p: [3]});
  });
  
  it('returns each letter and it\'s index position give a word with repeating letters', () => {
    assert.deepEqual(letterPositions("lighthouse in the house"), { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] });
  });

  it('returns each letter and it\'s index position given a word with punctuation', () => {
    assert.deepEqual(letterPositions("help!"), { h: [0], e: [1], l: [2], p: [3]});
  });

  it('returns an empty object given a string with numbers and punctuation', () => {
    assert.deepEqual(letterPositions("555-555-5555"), {});
  });
});