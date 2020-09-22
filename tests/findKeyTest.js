const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it('returns the key given a callback function that returns true for that key', () => {
    const ratings = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.strictEqual(findKey(ratings, x => x.stars === 2), "noma");
  });
  
  it('returns the first key given a callback function that returns true for many keys', () => {
    const ratings = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.strictEqual(findKey(ratings, x => x.stars > 2), "Akaleri");
  });

  it('returns undefined given a callback function that does not match any key', () => {
    const ratings = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.strictEqual(findKey(ratings, x => x.stars === 4), undefined);
  });
});