# Lotide
A smaller and simpler version of the [Lodash](https://lodash.com/) library.
## Purpose
**_BEWARE:_** This library was published for learning purposes. It is _not_ intended for use in production-grade software.

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

```bash
npm install @helenohyeah/lotide
```
**Require it:**
```javascript
const _ = require('@helenohyeah/lotide');
```
**Call it:**
```javascript
const results = _.tail([1, 2, 3]); // => [2, 3]
```

## Documentation

The following functions are currently implemented
| Function | Description |
| --- | --- |
| countLetters | Given a sentence, returns a count of how many time each letter appears in a sentence |
| countOnly | Given an array of items and a subset of items, returns a count of the subset items |
| findKey | Given an object and a callback function, returns the first key for which the callback returns truthy. Returns undefined if no value is found |
| findKeyByValue | Given an object and a value, returns the first key that contains the given value. Returns undefined if no given value is found |
| flatten | Given an array that may contain array subsets, return a 1D array with all the items |
| head | Given an array, return the first item in the array |
| letterPositions | Given a sentence, returns the index of each letter in the sentence |
| map | Given an array and a callback , returns the result of the callback |
| middle | Given an array, returns the value of the middle index (or the two values closest to the middle) |
| tail | Given an array, returns the array excluding the first element |
| takeUntil | Given an array and a callback, returns a slice of the array starting a the beginning until the callback returns truthy |
| without | Given an array and a subset of items, returns the array excluding the subset of items |
