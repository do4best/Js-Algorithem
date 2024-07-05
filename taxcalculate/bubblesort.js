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
/// 04/07/24
function selectionSort(arr){// define a selection sort
    let Length = arr.length; // initlize array length
    for(let i=0; i<Length; i++){ // loop through array
        let minIndex = i; // let first index placed
        for(let j=i+1; j<Length; j++){ // let loop to the remaining element
            if(arr[j]<arr[minIndex]){ // decide if loop array is less then minimal index remeber it is previously placed first if true
                minIndex = j; // make the remaining to min index
            }
        }// end of four loop
        if(minIndex !== i){// min index is not equal to looped array
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]] // it should be swapped
        }
    }
    return arr;
}
console.log(selectionSort(values))

/////// Merge Sort Example
/// 05/07/24

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    const mid = Math.floor(arr.length/2)
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid))
    return merge(left,right)
}
function merge(left,right){
    let merged=[];
    let leftIndex=0,rightIndex=0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            merged.push(left[leftIndex])
            leftIndex++;
        }else{
            merged.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))

}

let arra =[2,4,5,3,9,8,1]
console.log(mergeSort(arra))