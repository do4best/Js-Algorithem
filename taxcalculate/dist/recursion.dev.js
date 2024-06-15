"use strict";

// function recursion1(num){// simple recursion just like a loop
//     if(num <= 1){    // this is base condation which is less then given condation
//         console.log("All Done") // when it become false this sentence is shown
//         return; // when false return nothing
//     }
//     console.log(num) // display the result when the above condation is not true
//     num--; // decrement by one
//     recursion1(num)  // call itself 
// }
// function sumUp(num){ // this simple adding up loop
//     if(num === 1){ // this is base condation if the given number is equall to one
//         return 1; // return one
//     }
//     return num + sumUp(num-1) // add the number to the add up function and return to initial state
// }
// recursion1(15)
// console.log(sumUp(20))
// function reverseString(str){ // reverse the given string
//     if(str === ''){ // if string has blank it return i mean the condation become false
//         return ''; // return nothing
//     }
//     return reverseString(str.substr(1)) + str.charAt(0)
// }
// function fabonacci(num){
//     console.log(`Calculating Fabonachi(${num})`)
//     if(num < 2){
//         return num;
//     }
//     return fabonacci(num-1) + fabonacci(num-2)
// }
// console.log(reverseString("my name is train"))
// console.log(fabonacci(20))
// function factorial(num){
//     if(num === 0 || num === 1 ){
//         return 1;
//     }
//     console.log(` ${num} factorial is ${num*factorial(num-1)}` )
//     return num * factorial(num-1)
// }
// console.log(factorial(6))
function power(base, exponent) {
  if (exponent === 1) {
    return 1;
  }

  return exponent * power(base, exponent - 1);
}

console.log(power(2, 4));

function arrSum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + arrSum(arr.slice(1));
}

console.log(arrSum(["go", "with", "wind"])); /// range using recursion

function numberRange(start, end) {
  // make range an array to start and end 
  if (start === end) {
    // return true if start and end is equal
    return [start]; // if true it should return as array
  }

  var num = numberRange(start, end - 1); // initialize a variable with assigned numberRange( start and end, the end variable will decrement every time by 1 )

  num.push(end); // from the end it will move to array stack

  return num; // 
}

console.log(numberRange(1, 9)); // defining multiple array into a single one

function flattenArray(arr) {
  var result = []; // define an empty array

  for (var item in arr) {
    // loop through the values
    // here we go for the condation
    if (Array.isArray(item)) // checking from the loop that if an item is an array
      {
        result = result.concat(flattenArray(item)); // make the array to concatenation through recursion
      } else {
      result.push(item); // otherwise move it to the stack
    }
  }

  return result;
}

console.log(flattenArray([1, [2], [3], 4])); // permituation method means matching different letter in a string

function permituation(str) {
  var result = []; // define a local empty array
  // here it go for the condation 

  if (str.length === 0) {
    result.push(''); // if result become equall to 0 then it should be stacked

    return result;
  }

  for (var i = 0; i < str.length; i++) {
    // loop it through the given string 
    var firstChar = str[i]; // store the first character in the variable firstCharacter

    var restOfString = str.slice(0, i) + str.slice(i + 1); // since the first letter is storred the remaining letters should be stored 

    var sumPermi = permituation(restOfString); // the recusive step shouuld store in sumPermi

    for (var j = 0; j < sumPermi.length; j++) {
      // another loop shuld be defined on sumperi
      result.push(firstChar + sumPermi[j]); // it should be stacked in result array with first charackter as stored and remaing with recursive thing
    }
  }

  return result;
}

console.log(permituation("123456789"));