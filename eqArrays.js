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

module.exports = eqArrays;