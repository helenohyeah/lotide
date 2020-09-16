const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (!(eqArrays(actual, expected))) {
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

const flatten = function(arr) {
  let newArr = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let e of item) {
        newArr.push(e);
      }
    } else {
      newArr.push(item);
    }
  }
  return newArr;
};

/* PSUEDO CODE
  loop through the array
  check if each item is an array
  if it isn't an array, simply add it to a new array
  if it is an array, loop through it and add each element to the new array
  return the new array
*/

// TEST CODE
console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // pass
assertArraysEqual(flatten([7, 8, 9]), [7, 8, 9]); // pass
assertArraysEqual(flatten([11, 22, [33, 44]]), [1, 2, 3, 4]); // fail
assertArraysEqual(flatten(['1', 2, ['3', 4], 5, [6]]), ['1', 2, '3', 4, 5, 6]); // pass
assertArraysEqual(flatten(['1', 2, ['3', 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // fail
assertArraysEqual(flatten([['dog', 'cat'], ['whale', 'dolphin', 'tuna'], 'horse']), ['dog', 'cat', 'whale', 'dolphin', 'tuna', 'horse']); // pass
assertArraysEqual(flatten([['hi', 'bye'], []]), ['hi', 'bye']); // pass
assertArraysEqual(flatten([['dog', 'cat'], 'horse']), ['dog', 'cat']); // fail