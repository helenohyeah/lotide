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