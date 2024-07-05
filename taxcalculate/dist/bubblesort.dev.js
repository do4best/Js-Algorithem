"use strict";

function bubbleSort(arr) {
  var length = arr.length;

  for (var i = 0; i < length; i++) {
    // outer loop
    for (var j = 0; j < length - i - 1; j++) {
      // inner loop
      if (arr[j] > arr[j + 1]) {
        // check the array start is greater then next value
        var temp = arr[j]; // swap the inner loop condatation as per outer loop

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

var values = [2, 5, 1, 3, 9, 6, 8, 7];
console.log(bubbleSort(values)); // 02-07-24
//inseration sort

function inserationSort(arr) {
  var arrLength = arr.length; // assign the length;

  for (var i = 0; i < arrLength; i++) {
    // loop over the array parameter
    var currentEle = arr[i]; // store the array[i] in current Element

    var j = i - 1; // assign another variable non zero loop 

    while (j > 0 && arr[j] > currentEle) {
      // while none zero loop is greater then 0 and array looped is greater then current element
      arr[j + 1] = arr[j]; // it should step forword

      j--; // and reduces
    }

    arr[j + 1] = currentEle; // current element is increated
  }

  return arr; // return the value
}

console.log(inserationSort(values)); /// 04/07/24

function selectionSort(arr) {
  // define a selection sort
  var Length = arr.length; // initlize array length

  for (var i = 0; i < Length; i++) {
    // loop through array
    var minIndex = i; // let first index placed

    for (var j = i + 1; j < Length; j++) {
      // let loop to the remaining element
      if (arr[j] < arr[minIndex]) {
        // decide if loop array is less then minimal index remeber it is previously placed first if true
        minIndex = j; // make the remaining to min index
      }
    } // end of four loop


    if (minIndex !== i) {
      // min index is not equal to looped array
      var _ref = [arr[minIndex], arr[i]];
      arr[i] = _ref[0];
      arr[minIndex] = _ref[1];
    }
  }

  return arr;
}

console.log(selectionSort(values)); /////// Merge Sort Example
/// 05/07/24

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var mid = Math.floor(arr.length / 2);
  var left = mergeSort(arr.slice(0, mid));
  var right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  var merged = [];
  var leftIndex = 0,
      rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

var arra = [2, 4, 5, 3, 9, 8, 1];
console.log(mergeSort(arra));