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