// given a source array and an array of itemsToRemove
// return a new array with only elements from source that aren't in the itemsToRemove array
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

module.exports = without;