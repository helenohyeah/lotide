const assertArraysEqual = require('./assertArraysEqual.js');

const words = [
  'one',
  'two',
  'three',
  'four',
  'five'
];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// TESTING

// console.log(map(words, word => word[0]));

// assertArraysEqual(map([1, 3, 5], e => e * 2), [2, 6, 10]);
// assertArraysEqual(map(words, e => e.length), [3, 3, 5, 4, 4]);
// assertArraysEqual(map([1, "a"], e => (typeof e)), ['number']);