function bubbleSort(arr){
    let length = arr.length;
    for(let i=0; i<length; i++){// outer loop
        for(let j=0; j<length-i-1; j++){ // inner loop
            if(arr[j] > arr[j+1]){ // check the array start is greater then next value
                
                let temp = arr[j] // swap the inner loop condatation as per outer loop
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

let values = [2,5,1,3,9,6,8,7]
console.log(bubbleSort(values))
// 02-07-24
//inseration sort
function inserationSort(arr){
    let arrLength = arr.length; // assign the length;
    for(let i=0; i<arrLength; i++){ // loop over the array parameter
        const currentEle = arr[i]; // store the array[i] in current Element
        let j = i-1; // assign another variable non zero loop 
        while(j > 0  && arr[j] > currentEle){ // while none zero loop is greater then 0 and array looped is greater then current element
            arr[j+1] = arr[j] // it should step forword
            j--; // and reduces
        }
        arr[j+1] = currentEle // current element is increated
    }
    return arr; // return the value
}

console.log(inserationSort(values))