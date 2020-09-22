const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it('returns a number array until the element where the callback returns truthy', () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });
  
  it('returns a string array until the element where the callback returns truthy', () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });

  it('returns the unchanged array given a callback and an array that will only return falsy', () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7], x => x > 10), [1, 2, 5, 7]);
  });

  it('returns and empty array given an empty array and a callback', () => {
    assert.deepEqual(takeUntil([], x => x === 1), []);
  });
});