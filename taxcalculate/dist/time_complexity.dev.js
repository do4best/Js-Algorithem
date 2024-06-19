"use strict";

// constant time complexity
// linear time commplexity
// quadric time complexity
// algorithemic time complexity.
// O(1) contant
// O(n) // linear
// O(n^2) // quadric
// O(logn)// Logermethic
// accessing element by index is O(1)
// inseration and deletion at end is O(1)
// inseration and deletion at begnining is O(n)
// search for an element O(n)
// bineary Search O(log n)
// constant time complexity Example O(1)
function accessingIndex(arr, index) {
  return arr[index];
}

var arr = [2, 1, 3, 4, 5, 6];
console.time("Accessing time 1");
console.log(accessingIndex(arr, 1));
console.timeEnd("Accessing time 1");
var arr2 = Array.from({
  length: 1000
}, function (_, index) {
  return index + 1;
});
console.time("Accessing time 2");
console.log(accessingIndex(arr2, 100));
console.timeEnd("Accessing time 2"); // Leaner time complexity // the bigger the input the longer the time it takes

function sumAll(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = arr[i];
  }

  return sum;
}

var array = [1, 2, 3, 4, 5];
console.time(" time 3");
console.log(sumAll(array));
console.timeEnd(" time 3");
var array1 = Array.from({
  length: 1000
}, function (_, index) {
  return index + 1;
});
console.time(" time 4");
console.log(sumAll(array1));
console.timeEnd(" time 4"); /// quadric time complexity O(n^2)

function sumquadric(arr) {
  var sum = 1;
  var sum1 = 1;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];

    for (var j = 0; j < arr.length; j++) {
      sum1 += arr[j];
    }
  }

  return sum + sum1;
}

console.time(" time 4");
console.log("The total is given as" + array.reduce(function (total, num) {
  return total + num;
}, 0) + ", " + sumquadric(array));
console.timeEnd(" time 4");
var array2 = Array.from({
  length: 1000
}, function (_, index) {
  return index + 1;
});
console.time(" time 5");
console.log(sumquadric(array2));
console.timeEnd(" time 5"); // logermathic 

function findPower(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  if (exponent % 2 === 0) {
    var halfPower = findPower(base, exponent / 2);
    return halfPower * halfPower;
  } else {
    var _halfPower = findPower(base, (exponent - 1) / 2);

    return base * _halfPower * _halfPower;
  }
}

console.time("");
console.log(findPower(2, 100));
console.timeEnd("");
console.time("");
console.log(findPower(2, 1000));
console.timeEnd("");