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