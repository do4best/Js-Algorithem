const isValid=(input)=>{
    const octets = input.split('.'); // local variable is defined for splitting the input by . operator
    if(octets.length !== 4){ // if condation is used that the input should be no more then 4
        return false;  // if the condation is true then return nothing means false
    }
    return octets.every((octet)=>{  // every method is used on local variable to check that it should retun integer value
        const num = parseInt(octet);
        return num >= 0 && num <= 255 && octet === num.toString(); // the condation num should be greater then zero and less then 255 and the parameter given in function should be equalt to 4 ranges.
    });
};

console.log(isValid("101.110.5.6"))
console.log(isValid("hello.friend.eats.apples"))