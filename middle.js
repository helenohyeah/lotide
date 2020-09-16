const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`💚 Assertion Passed`);
  } else if (!(eqArrays(actual, expected))) {
    console.log(`⚠️ Assertion Failed`);
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

const middle = function(arr) {
  // check the length of the array
  let len = arr.length;
  if (len <= 2) {  // if length is less than 2, return an empty array
    return [];
  } else if (len % 2 !== 0) {  // if odd, return the value at index = length/2 (rounded up)
    return [arr[Math.floor(len/2)]];
  } else if (len %2 === 0) {  // if even, return the values at index = length/2 - 1, length/2
    return [arr[len/2 - 1], arr[len/2]];
  }
};

// TEST CODE

assertArraysEqual(middle([1]), []); // pass
assertArraysEqual(middle([1, 2]), []); // pass
assertArraysEqual(middle([1, 2, 3]), [2]); // pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [2]); // fail