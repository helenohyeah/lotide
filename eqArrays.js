const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`⚠️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  // loop through the length of the longer array
  let len = Math.max(array1.length, array2.length);
  // compare the values at each index
  for (let i = 0; i < len; i++) {
    if (array1[i] !== array2[i]) {
      return false; // if any value don't match return false
    } else {
      continue;
    }
  }
  return true; // if the loop completes without a false then the arrays must match
};


// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", 4]), false);
assertEqual(eqArrays(["1", "2", "3", "4"], ["1", "2"]), false);