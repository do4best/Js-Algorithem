
function countDown(num){
    // if(num >= 20){
    //     console.log("All is done")
    //     return;
    // }
    // console.log(num)
    // num++;
    // countDown(num)
    // if(num === 1){
    //     console.log(`countDown(${num}) return 1`)
    //     return 1;
    // }
    // console.log(`countDown(${num}) calls countDown(${num-1}) + ${num}`)
    // const result= num + countDown(num-1)
    // console.log(`countDown(${num}) return ${result}`)
    // return result;
}
function countDown1(num){
    return (num === 1)?1:num+countDown1(num-1)
}
// countDown(10)
console.log(countDown1(90) + " Hello")

const reverseString=(str)=> str===''?'':reverseString(str.substr(1) + str.charAt(0).val())



console.log(reverseString("Bonias Noches"))