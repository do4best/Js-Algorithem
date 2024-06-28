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
// function anagramGrouping(words){// initializing the funcion 
//  const anagramGroups = new Map(); // declaring local Map() Object
//  for (const word of words){ // looping through the given parameters
//     const sortedGrouping = word.split('').sort().join(''); // store the value fromm looping firstly make them split then sort and then rejoin with space parameter
//    if(anagramGroups.has(sortedGrouping)){ // check with if condation that map Object with the help of has method that if the above store value has the object if true proceed with following instructions
//     anagramGroups.get(sortedGrouping).push(word) // if true means it will get the value and then push it into a stack ?how strange?
//    }else{ // and if it is false 
//     anagramGroups.set(sortedGrouping,[word]) // then it should be set by Map the key and store the value in array "means make a new one"
//    }
//  }
//  return Array.from(anagramGroups.values()) // and it should return as Array.from map object with value
// }

// console.log(anagramGrouping(['cat','act','dog','god','tac'])) // testing of anargrouping words example
// // 24-06-24
// // set example
// const fineSet = new Set(["Meer","Afzal","shah"])
// fineSet.add(20)
// console.log(fineSet.size)
// console.log(fineSet.values())

// function symetricDifference(arr1,arr2){ // this function realy strange to find the same element and unique element as it take two parameters
//   const set1 = new Set(arr1); // define a set1 and pass first parameter in it
//   const set2 = new Set(arr2) // define second set2 and pass second patameter in it
// // the following algo is written to find same element in two sets
//   const arr=[]; // define an empty array
//   for(let num of arr1){ // first loop through the first parammeter of array
//     if(!set2.has(num)){ // impose a condation if in set2 the element not found while looping first paramter
//       arr.push(num) // it should be push to the empty array
//     }
//   }
  
//   for(let num of arr2){ // same goes here loop through the second parameter of array
//     if(!set1.has(num)){ // if the element is not found in set 1
//       arr.push(num) // it should be push to the empty array
//     }
//   }
//   return arr;
//   //return set1; // return first set for unique value in both set and if want to find dublicate value go for return second set2
// }// end of function
// console.log(symetricDifference([1,2,3,4,5],[3,4,5,6])) // the question is why it did not include 6

// // find sum of two to targer the desired number
// function findSum(num,target){ // paramet an array and second one is find the desired value from the array
//   const numSet = new Set(); //////// first define a set
//   for(let i=0; i<num.length; i++){ // loop through the array
//     const complement = target - num[i] // take the targeted sum from the looped array
//     if(numSet.has(complement)){ // imposed the condation if in a set the desired target has the value
//       return [num.indexOf(complement),i] // it should return the value as an array where the first parameter as index and second as ranged value
//     }
//     numSet.add(num[i]) // it should add the value in set data struncture
//   }
//   return []
// }
// const result=[7,2,3,5,6,8]
// console.log(findSum(result,8))
// 25-06-24
// finding the longest sequence
// function findingLongestSequence(num){
//   const numSet = new Set(num);
//   let longestSequence = 0;
//   for (let num of numSet){
//     if(!numSet.has(num-1)){
//       let currentNum = num;
//       let currentSequence = 1;
//       while(numSet.has(currentNum+1)){
//         currentNum++;
//         currentSequence++;
//       }
//       longestSequence = Math.max(longestSequence,currentNum)

//     }
   
//   }
//   return longestSequence;
// }
// console.log(findingLongestSequence([23,4,5,6,8,10,22,33,44]))
// // hash table example (custome new Map)
// class HashMap{ // declaring the hashMap
//   constructor(limit=14){ // constructor with default limit
//     this.storage=[]; // storage array 
//     this.limit=limit // assign the default limit which is 14
//   }
//   // private method
//   _has(key1,max){ // declaring value and max limit
//     let hash=0; // local variable default 0
//     for(let i=0; i<key1.length; i++){ // loop through the value 
//       hash += key1.charCodeAt(i); // the local varible hash assigned with aschii character limit
//     }// end of four loop
//     return hash % max; // return hash with reminder against max

//   }// end of private method
//   printTable(){
//     for(let i=0; i<this.storage.length; i++){
//       if(this.storage[i] !== undefined){
//         console.log(`Bucket ${i}: ${JSON.stringify(this.storage[i])}`)
//       }else{
//         console.log(`Bucket ${i}`)
//       }
//     }
//   }
// 26-6-24
//   set(key,value){
//     const index = this._has(key,this.limit)
//     if(this.storage[index] === undefined){
//       this.storage[index] = [[key,value]]
//     }else{
//       let inserted = false;
//     }
//     for(let i=0; i<this.storage[index].length; i++){
//       if(this.storage[index][i][0] === key){
//         this.storage[index][i][1] = value;
//         inserted = true;
//       }
//     }
//     if(inserted === false){
//       this.storage[index].push([key,value])
//     }
//   }
//  }
// // test value
// const hastTable = new HashMap();

// hastTable.set(["Hell","562892"])
// failed in has table due to errot charCodeAt() not Define
// repeting a word in a sentence
// function wordInstanceCounter(str,word){ // word encounter repition
//   const words = str.toLowerCase().split(/\W+/);  // make the first parameter which is in fact a sentence should be in lower case exclude the empty spaces
//   const wordFrequency = new Map(); // create a data structure
//   const targetWord = word.toLowerCase() // // make the second argument to lowr case
//   let count=0; // initial a counter with zero
//   for(const currentWord of words){ // iterate first argument i mean the sentence and stroe the value in current word
// if(currentWord === '') continue; // if current word is a space it should move on
// if(wordFrequency.has(currentWord)){ // if map data structure find the looped word
//   wordFrequency.set(currentWord,wordFrequency.get(currentWord) + 1) // it should set the loop word as index and return with addition 
// }else{ //otherwise
//   wordFrequency.set(currentWord,1) // if not true it should make the current word index and value from one.
// }
// if(currentWord === targetWord){ // if the current word is as same as searched value 
//   count = wordFrequency.get(currentWord) // it should be same output
// }

//   }// end of iterator
//   return count;// return count
// }
// console.log(wordInstanceCounter("this is a man of word and it is nice",'is'))
// Stack datastructure implementation
// class Stack{ // imperative Stack class is implemented
//   constructor(){ // the constructor has theree variable
//     this.maxSize = 100; // this max size is 100
//     this.stack = [] // an empty array
//     this.top = -1 // form top it is result not zero
//   }
//   push(value){ // make it push to the stack
//     if(this.isFull()){ // this is full
//       return false; // do nothing and return false
//     }
//     this.top++; // it should increment to the top
//     this.stack[this.top] = value; // and stor in the array by way of top
//     return true; // and return true
//   }
//   pop(){ // make it to remove from top
//     if(this.isEmpty()){ // if it is empty
//       return null; // it should return false;
//     }
//     this.top--; // remove it from top
//     return this.stack.pop(); // as it is an array it should be remove from array too
//   }
//   isEmpty(){ // define the empty
//     return this.top === this.maxSize - 1; // if top and max size has nothing to show
//   }
//   isPeek(){ // look at last value store in the Stack
//     if(this.isEmpty()){ // if it is empty reutn nothing
//       return null;
//     }
//     return this.stack[this.top] // loop at the top
//   }
//   isFull(){
//     return this.top === this.maxSize - 1;
//   }
// }
// let stack = new Stack()

// stack.push("hello")
// stack.push("world")
// console.log(stack)

// console.log(stack)
// 27-06-24
// // reverse String using Stack DS
// function reverseString(str){
// let reverseStack = new Stack()
// for(let i=0; i<str.length; i++){
//   reverseStack.push(str[i])
// }
// let revrseString;
// while(!reverseStack.isEmpty()){
//   reverseString += reverseStack.pop() 
// }
// return reverseString
// }

// let wrod= "Hello World"
// console.log(reverseString(wrod))
// Que Data Structure
class Queue{
  constructor(){
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = 100;

  }
  enqueue(item){
    if(this.isFull()){
      return false;
    }
    this.queue[this.tail] = item;
    this.tail++;
    return true;

  }
  dequeue(){
    const item = this.queue[this.head];
    this.head++;
    return item;
  }
  peek(){
    return this.queue[this.head]
  }
  getLength(){
    return this.tail - this.head;
  }
  isEmpty(){
    return this.getLength === 0;
  }
  isFull(){
    return this.getLength() === this.maxSize; 
  }
 
}
// function reverseString(str){
//   const que = new Queue();

//   for(let i=str.length-1; i>=0; i--){
//     que.enqueue(str[i])
//   }
//   let string1 = ""
//   while(!que.isEmpty()){

//     string1 += que.dequeue(str)
//   }
//   return string1;
// }
// let words = 'Hello world';
// reverseString(words)
// understanding linked list
class Node{
  constructor(data){
    this.node = data;
    this.next = null;
  }
}
class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null

  }
  add(data){
    const node = new Node(data)
    if(this.head === null){
      this.head = node;

    }else{
      this.tail.next = node;
    }
    this.tail = node;
    return node;
  }
  printAll(){
    let current = this.head;
    while(current !== null){
      console.log(current.data)
      current = current.next
    }
    return current;
  }
}
let link = new LinkedList();
link.add(100)
link.add(200)
link.add(300)
link.printAll()