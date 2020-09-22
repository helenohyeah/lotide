// take in a sentence (string) and return a count of how many times each letter appears on the sentence
const countLetters = function(sentence) {
  let string = sentence.split(' ').join('').toLowerCase();
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let result = {};
  for (let letter of string) {
    if (alphabet.includes(letter)) {
      result[letter] ? result[letter] += 1 : result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;




