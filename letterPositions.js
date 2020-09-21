const assertArraysEqual = require('./assertArraysEqual.js');

const letterPositions = function(sentence) {
  const result = {};
  let lowerCase = sentence.toLowerCase();
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let i = 0; i < lowerCase.length; i++) {
    if (alphabet.includes(lowerCase[i])) {
      if (result[lowerCase[i]]) {
        result[lowerCase[i]].push(i);
      } else {
        result[lowerCase[i]] = [i];
      }
    }
  }
  return result;
};

module.exports = letterPositions;

// TEST CODE
// console.log(letterPositions('hello')); // { h: [0], e: [1], l: [2, 3], o: [4]}
// console.log(letterPositions('lighthouse in the house')); // { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] }

// assertArraysEqual(letterPositions('hello')['l'], [2, 3]);
// assertArraysEqual(letterPositions('lighthouse in the house')['i'], [1, 11]);