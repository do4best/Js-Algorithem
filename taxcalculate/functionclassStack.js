// 30-06-24
// implemention of Stack using function class

function Stack(arr){ // function class implemention for Stack
    this.array=[]; // create an array
    if(arr)this.array=arr // check the paramet is given
}
Stack.prototype.getBuffer = function(){ // make them seperate
    return this.array.slice(); 
}
Stack.prototype.isEmpty = function(){ // check it is empty
    return this.array.length === 0;
}
Stack.prototype.push = function(value){ // inseration into stack
    return this.array.push(value)
}
Stack.prototype.peek = function(){ // check the last value in Stack
    return this.array[this.array.length-1]
}
Stack.prototype.pop = function(){ // remove the last value
    return this.array.pop()
}
Stack.prototype.accessElement = function(stack,n){ // to access the specific value in the stack
let bufferArray = stack.getBuffer();// initaliz a buffer array
if(n<=0)throw 'err'; // if is less then 0 throw an erroe
let bufferStack = new Stack(bufferArray); // initilize the stack 
while(--n !== 0){ // this is strange if value is not equal to zero
    bufferStack.pop() // it should be removed
}
return bufferStack.pop()// return remove from the 
}

// search in Stack
Stack.prototype.search = function(stack,ele){// search in the stack
    let bufferArray = stack.getBuffer() // create a buffere stack
    let bufferStack = new Stack(bufferArray)// same as above
    while(!bufferStack.isEmpty()){ //  if buffer stack is not empty
        if(bufferStack.pop() == ele){ //and 
            return true;}

    }
    return false;

}
// leaner search

let stack = new Stack()
stack.push(1)
stack.push(3)
stack.push(4)


console.log(stack)
console.log(stack.peek())
console.log(stack.accessElement(stack,2))
console.log(stack.search(stack,9))
let arr = new Stack();
console.log(arr)
let arr2=[11,22,33,44]
arr2.forEach((index,value)=>{
    console.log(value)
    console.log(index)
})
