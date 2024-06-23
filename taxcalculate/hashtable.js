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
function anagramGrouping(words){// initializing the funcion 
 const anagramGroups = new Map(); // declaring local Map() Object
 for (const word of words){ // looping through the given parameters
    const sortedGrouping = word.split('').sort().join(''); // store the value fromm looping firstly make them split then sort and then rejoin with space parameter
   if(anagramGroups.has(sortedGrouping)){ // check with if condation that map Object with the help of has method that if the above store value has the object if true proceed with following instructions
    anagramGroups.get(sortedGrouping).push(word) // if true means it will get the value and then push it into a stack ?how strange?
   }else{ // and if it is false 
    anagramGroups.set(sortedGrouping,[word]) // then it should be set by Map the key and store the value in array "means make a new one"
   }
 }
 return Array.from(anagramGroups.values()) // and it should return as Array.from map object with value
}

console.log(anagramGrouping(['cat','act','dog','god','tac'])) // testing of anargrouping words example