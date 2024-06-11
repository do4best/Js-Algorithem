function recursion1(num){
    if(num <= 1){
        console.log("All Done")
        return;
    }
    console.log(num)
    num--;
    recursion1(num)
}
function sumUp(num){
    if(num === 1){
        return 1;
    }
    return num + sumUp(num-1)
}
recursion1(15)
console.log(sumUp(20))

function reverseString(str){
    if(str === ''){
        return '';
    }
    return reverseString(str.substr(1)) + str.charAt(0)
}
function fabonacci(num){
    console.log(`Calculating Fabonachi(${num})`)
    if(num < 2){
        return num;
    }
    return fabonacci(num-1) + fabonacci(num-2)
}
console.log(reverseString("my name is train"))
console.log(fabonacci(20))
