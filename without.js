const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (!(eqArrays(actual, expected))) {
    console.log(`⚠️ Assertion Failed: ${actual} !== ${expected}`);
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
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["hello", "earth", "goodbye", "moon"], ["hello", "goodbye"])); // => ["earth", "moon"]
console.log(without([1, 1, 2, 3], [1])); // => [2, 3]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysequal(words, ["hello", "world", "lighthouse"]);
