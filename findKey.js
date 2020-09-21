const assertEqual = require('./assertEqual.js');

// scan the object and return the first key for which the callback returns a truthy value
// if no key is found, then it should return undefined.
const findKey = function(object, callback) {
  for (let item in object) {
    if (callback(object[item])) return item;
  }
  return undefined;
};

module.exports = findKey;

// TESTING
// const ratings = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };
// assertEqual(findKey(ratings, x => x.stars === 2), "noma");
// assertEqual(findKey(ratings, x => x.stars === 4), undefined);
// assertEqual(findKey(ratings, x => x.stars > 2), "Akaleri");