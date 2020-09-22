const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it('returns { l: 1, i: 1, g: 1, h: 3, t: 1, o: 2, u: 2, s: 2, e: 2 } given "lighthouse house"', () => {
    assert.deepEqual(countLetters("lighthouse house"), { l: 1, i: 1, g: 1, h: 3, t: 1, o: 2, u: 2, s: 2, e: 2 });
  });
  
  it('returns { h: 2, e: 3, l: 3, o: 1, n: 1 } given "Hello Helen!"', () => {
    assert.deepEqual(countLetters("Hello Helen!"), { h: 2, e: 3, l: 3, o: 1, n: 1 });
  });

  it('returns { i: 1, t: 1, s: 1} given "It\'s 555-5555"', () => {
    assert.deepEqual(countLetters("It's 555-5555"), { i: 1, t: 1, s: 1});
  });

  it('returns {} given ""', () => {
    assert.deepEqual(countLetters(""), {});
  });
});