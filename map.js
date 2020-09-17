const words = [
  'one',
  'two',
  'three',
  'four',
  'five'
];

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (!(eqArrays(actual, expected))) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  // check if array lengths are equal => return false
  if (array1.length !== array2.length) return false;
  // compare the values at each index
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      // check if any value does't match => return false
      return false;
    } else {
      continue;
    }
  }
  // if the loop completes then the arrays must match
  return true;
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// TESTING

console.log(map(words, word => word[0]));

assertArraysEqual(map([1, 3, 5], e => e * 2), [2, 6, 10]);
assertArraysEqual(map(words, e => e.length), [3, 3, 5, 4, 4]);
assertArraysEqual(map([1, "a"], e => (typeof e)), ['number']);