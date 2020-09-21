const middle = function(arr) {
  // check the length of the array
  let len = arr.length;
  if (len <= 2) {  // if length is less than 2, return an empty array
    return [];
  } else if (len % 2 !== 0) {  // if odd, return the value at index = length/2 (rounded up)
    return [arr[Math.floor(len / 2)]];
  } else if (len % 2 === 0) {  // if even, return the values at index = length/2 - 1, length/2
    return [arr[len / 2 - 1], arr[len / 2]];
  }
};

module.exports = middle;