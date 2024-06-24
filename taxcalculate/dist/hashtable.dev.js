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
// function wordsFrquencyCounter(str){// take string as parameter
//     const words = str.toLowerCase().split(/\W+/); // make the string lowercas and count whitespace
//     const wordsFrquency = new Map() // initiliaze map object
//     for(const word of words){ // loop through the value of given string
//         if(word === "") continue; // if there is a space between a sentence make it continue
//         if(wordsFrquency.has(word)){ // also check that it has given value by a sentence and if it is true
//             wordsFrquency.set(word,wordsFrquency.get(word) + 1);  // make them set in map object where is second argument return the value and increment
//         }else{ // if become false
//             wordsFrquency.set(word,1) // then set the loop value with value of 1 and it happen whem there is no value
//         }// end of the if
//     }// end of the for loop
//     return wordsFrquency;
// } // end of function.
// console.log(wordsFrquencyCounter("my name is jhon and my country is pakistan"))
// console.log(wordsFrquencyCounter(""))
// // phonenumber directory
// function phoneDirectory(phones){ // phone directory function to analyze the given array with name and phone no
//     const directory = new Map() // fist initilize the directory with map Object
//     for(const phone of phones){ // loop through the given value
//         const [name,phones] = phone.split(":") // destructured it with name and given value 
//         directory.set(name,phones) // then set them in index and phones value
//     }// end of for loop
//     return directory;
// }// end of phone directory
// const phoneNumbers=[
//     'Meer:03204522701',
//     'faisal:0320999299'
// ]
// const result = phoneDirectory(phoneNumbers) 
// console.log(result.get('faisal'))
// Meer Afzal
// 23-06-24
/// anagram means grouping similiar spelling words
function anagramGrouping(words) {
  // initializing the funcion 
  var anagramGroups = new Map(); // declaring local Map() Object

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = words[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var word = _step.value;
      // looping through the given parameters
      var sortedGrouping = word.split('').sort().join(''); // store the value fromm looping firstly make them split then sort and then rejoin with space parameter

      if (anagramGroups.has(sortedGrouping)) {
        // check with if condation that map Object with the help of has method that if the above store value has the object if true proceed with following instructions
        anagramGroups.get(sortedGrouping).push(word); // if true means it will get the value and then push it into a stack ?how strange?
      } else {
        // and if it is false 
        anagramGroups.set(sortedGrouping, [word]); // then it should be set by Map the key and store the value in array "means make a new one"
      }
    }
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

  return Array.from(anagramGroups.values()); // and it should return as Array.from map object with value
}

console.log(anagramGrouping(['cat', 'act', 'dog', 'god', 'tac'])); // testing of anargrouping words example
// 24-06-24
// set example

var fineSet = new Set(["Meer", "Afzal", "shah"]);
fineSet.add(20);
console.log(fineSet.size);
console.log(fineSet.values());

function symetricDifference(arr1, arr2) {
  // this function realy strange to find the same element and unique element as it take two parameters
  var set1 = new Set(arr1); // define a set1 and pass first parameter in it

  var set2 = new Set(arr2); // define second set2 and pass second patameter in it
  // the following algo is written to find same element in two sets

  var arr = []; // define an empty array

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arr1[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var num = _step2.value;

      // first loop through the first parammeter of array
      if (!set2.has(num)) {
        // impose a condation if in set2 the element not found while looping first paramter
        arr.push(num); // it should be push to the empty array
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = arr2[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _num = _step3.value;

      // same goes here loop through the second parameter of array
      if (!set1.has(_num)) {
        // if the element is not found in set 1
        arr.push(_num); // it should be push to the empty array
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return arr; //return set1; // return first set for unique value in both set and if want to find dublicate value go for return second set2
} // end of function


console.log(symetricDifference([1, 2, 3, 4, 5], [3, 4, 5, 6])); // the question is why it did not include 6
// find sum of two to targer the desired number

function findSum(num, target) {
  var numSet = new Set();

  for (var i = 0; i < num.length; i++) {
    var complement = target - num[i];

    if (numSet.has(complement)) {
      return [num.indexOf(complement), i];
    }

    numSet.add(num[i]);
  }

  return [];
}

var result = [7, 2, 3, 5, 6, 8];
console.log(findSum(result, 8));