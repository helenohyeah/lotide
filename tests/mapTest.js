const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it('returns an array after it\'s gone through a callback that multiples each element', () => {
    assert.deepEqual(map([1, 3, 5], e => e * 2), [2, 6, 10]);
  });
  
  it('returns an array after it\'s gone through a callback that counts the length of each element', () => {
    const words = [
      'one',
      'two',
      'three',
      'four',
      'five'
    ];
    assert.deepEqual(map(words, e => e.length), [3, 3, 5, 4, 4]);
  });

  it('returns an array after it\'s gone through a callback that gets the type of each element', () => {
    assert.deepEqual(map([1, "a"], e => (typeof e)), ['number', 'string']);
  });

  it('returns [] given an empty array and any callback function', () => {
    assert.deepEqual(map([], e => e + 5), []);
  });
});