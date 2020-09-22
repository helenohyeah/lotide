const assertArraysEqual = require('./assertArraysEqual.js');

const flatten = function(arr) {
  let newArr = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let e of item) {
        newArr.push(e);
      }
    } else if (item.length !== 0) {
      newArr.push(item);
    }
  }
  return newArr;
};

module.exports = flatten;

/* PSUEDO CODE
  loop through the array
  check if each item is an array
  if it isn't an array, simply add it to a new array
  if it is an array, loop through it and add each element to the new array
  return the new array
*/

// // TEST CODE
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // pass
// assertArraysEqual(flatten([7, 8, 9]), [7, 8, 9]); // pass
// assertArraysEqual(flatten([11, 22, [33, 44]]), [1, 2, 3, 4]); // fail
// assertArraysEqual(flatten(['1', 2, ['3', 4], 5, [6]]), ['1', 2, '3', 4, 5, 6]); // pass
// assertArraysEqual(flatten(['1', 2, ['3', 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // fail
// assertArraysEqual(flatten([['dog', 'cat'], ['whale', 'dolphin', 'tuna'], 'horse']), ['dog', 'cat', 'whale', 'dolphin', 'tuna', 'horse']); // pass
// assertArraysEqual(flatten([['hi', 'bye'], []]), ['hi', 'bye']); // pass
// assertArraysEqual(flatten([['dog', 'cat'], 'horse']), ['dog', 'cat']); // fail