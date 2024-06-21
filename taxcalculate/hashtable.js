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
const myMap = new Map([
    [1,"Meer Afzal"],
    [2,"do4best@gmail"],
    [3,"0320-4522701"]
]);
console.log(myMap.get(3))
console.log(myMap.size)
myMap.set(4,"Lahore")
console.log(myMap)
console.log(myMap.values())
for(let [key,value] in myMap){
console.log(key, value)
}