import {titleCase,reverseString,countVowal,calculateTotalSaleswithTex,findEvenNumber} from './module1.js';

let arr = [1,2,3,4,5,6,7,8,9,10]


let newArray = arr.map((num)=>{
    return num*3;
})
console.log(newArray)
console.log(newArray.filter((arr)=>{
    return arr % 2 === 0;
}))

const products=[ {name:"car",price:250000,quantity:20}]

console.log(newArray.reduce((tota,num)=>{return tota + num},0))


let result =  calculateTotalSaleswithTex(products,20)



let obj1 = [{
    name:"Meer"},
    {age:45
}]

console.log(obj1.find((age)=>age>44))


console.log(result)
console.log(titleCase("hello"))
console.log(reverseString("my name is meer"))
console.log(countVowal("my name is afzal"))