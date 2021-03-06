const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it('returns 1 given [ 1, 2, 3 ]', () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  
  it('returns 5 given [5]', () => {
    assert.strictEqual(head([5]), 5);
  });

  it('returns "Hello" given ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it('returns "Hello" given ["Boo"]', () => {
    assert.strictEqual(head(["Boo"]), "Boo");
  });

  it('returns undefined given empty parameter', () => {
    assert.strictEqual(head(), undefined);
  });
});