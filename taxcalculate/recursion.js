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

function factorial(num){
    if(num === 0 || num === 1 ){
        return 1;
    }
    console.log(` ${num} factorial is ${num*factorial(num-1)}` )
    return num * factorial(num-1)
}

console.log(factorial(6))
