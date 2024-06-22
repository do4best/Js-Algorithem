"use strict";

// Has Table
// A data structure that implements an associative array of abstruct type with kay/value pairs
// time complexity is O(1) which means it constant no matter how much you input it result will be show in no time
// space complexity is O(n) means linear because the more the input the bigger the ram(space) is occupied
// it consist mainly of the following methods

/* 
index(key) is the main part of the game is
1- set(key,value) // set a key with value
2-get(key) // return the given key
3-remove(key) // to remove a key
4-has(key) // to check if a particular key is available
5-keys() return all the keys in the table
6-values() return all the value in a index
*/
// const myMap = new Map([
//     [1,"Meer Afzal"],
//     [2,"do4best@gmail"],
//     [3,"0320-4522701"]
// ]);
// console.log(myMap.get(3))
// console.log(myMap.size)
// myMap.set(4,"Lahore")
// console.log(myMap)
// console.log(myMap.values())
// for(let [key,value] in myMap){
// console.log(key, value)
// }
// 22-06-24
// Meer Afzal
// understanding a frequency counter function
function wordsFrquencyCounter(str) {
  // take string as parameter
  var words = str.toLowerCase().split(/\W+/); // make the string lowercas and count whitespace

  var wordsFrquency = new Map(); // initiliaze map object

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = words[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var word = _step.value;
      // loop through the value of given string
      if (word === "") continue; // if there is a space between a sentence make it continue

      if (wordsFrquency.has(word)) {
        // also check that it has given value by a sentence and if it is true
        wordsFrquency.set(word, wordsFrquency.get(word) + 1); // make them set in map object where is second argument return the value and increment
      } else {
        // if become false
        wordsFrquency.set(word, 1); // then set the loop value with value of 1 and it happen whem there is no value
      } // end of the if

    } // end of the for loop

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return wordsFrquency;
} // end of function.


console.log(wordsFrquencyCounter("my name is jhon and my country is pakistan"));
console.log(wordsFrquencyCounter(""));