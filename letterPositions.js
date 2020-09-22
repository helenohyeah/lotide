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