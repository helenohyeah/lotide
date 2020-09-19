const assertArraysEqual = require('./assertArraysEqual.js');

const without = function(array, remove) {
  let newArr = [];
  for (let itemArr of array) {
    let equal;     // tracks whether items are equal
    for (let itemRmv of remove) {
      // check if items are equal
      equal === true ? equal = true : equal = isEqual(itemArr, itemRmv);
    }
    if (!equal) {     // if no equal found, push the item into a new array
      newArr.push(itemArr);
    }
  }
  return newArr;
};

const isEqual = function(itemArr, itemRmv) {
  return (itemArr === itemRmv) ? true : false;
};


// TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["hello", "earth", "goodbye", "moon"], ["hello", "goodbye"]), ["earth", "moon"]);
assertArraysEqual(without([1, 1, 2, 3], [1]), [2, 3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);