"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
var myMap = new Map([[1, "Meer Afzal"], [2, "do4best@gmail"], [3, "0320-4522701"]]);
console.log(myMap.get(3));
console.log(myMap.size);
myMap.set(4, "Lahore");
console.log(myMap);
console.log(myMap.values());

for (var _ref in myMap) {
  var _ref2 = _slicedToArray(_ref, 2);

  var key = _ref2[0];
  var value = _ref2[1];
  console.log(key, value);
}