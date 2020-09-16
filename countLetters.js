// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`⚠️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// take in a sentence (string) and return a count of how many times each letter appears on the sentence
const countLetters = function (sentence) {
  let string = sentence.split(' ').join('').toLowerCase();
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let result = {};
  for (letter of string) {
    if (alphabet.includes(letter)) {
      result[letter] ? result[letter] += 1 : result[letter] = 1;
    }
  }
  return result;
}


// TEST CODE
countLetters("lighthouse house"); // { l: 1, i: 1, g: 1, h: 3, t: 1, o: 2, u: 2, s: 2, e: 2 }
countLetters("Hello Helen!"); // { h: 2, e: 3, l: 3, o: 1, n: 1 }
countLetters("It's 555-5555"); // { i: 1, t: 1, s: 1}

assertEqual(countLetters("lighthouse house")['h'], 3);
assertEqual(countLetters("Hello Helen!")['h'], 2);
assertEqual(countLetters("It's 555-5555")['i'], 1);




