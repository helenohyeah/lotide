const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`⚠️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

// TESTING
const words = ['Hello', 'Hi', 'Yo'];
const resultWords = tail(words);
assertEqual(words.length, 3);
assertEqual(resultWords.length, 2);
assertEqual(resultWords[0], 'Hi');
assertEqual(resultWords[1], 'Yo');

const letters = ['A'];
const resultLetters = tail(letters);
assertEqual(letters.length, 1);
assertEqual(resultLetters.length, 0);
assertEqual(resultLetters[0],);

const empty = [];
const resultEmpty = tail(empty);
assertEqual(empty.length, 0);
assertEqual(resultEmpty.length, 0);
assertEqual(resultEmpty[0],);