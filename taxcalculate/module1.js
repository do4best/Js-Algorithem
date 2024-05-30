function titleCase(str){
    const words = str.toLowerCase().split('')
    for(let i=0; i<words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)

    }
    return words.join('')
}
function reverseString(str){
let reverse = ''
for(let i=str.length-1; i>=0; i--){
    reverse += str[i]
}
return reverse;
}
function countVowal(str){
    const formattedString = str.toLowerCase();
    let count=0
    for(let i=0; i<str.length; i++){
        const char = formattedString[i]
        if(char === 'a' ||
        char === 'e' ||
        char === 'i' ||
        char === 'o' || char === 'u'
        ){
            count++
        }
    }
    return count;
}
function calculateTotalSaleswithTex(product,taxRate){
    const totalSales = product.reduce((sum,product)=>sum + product.price * product.quantity,0)
    const taxAmount = (totalSales*taxRate)/100 
    const totalSalesWithTax = totalSales + taxAmount
    return parseFloat(totalSalesWithTax.toFixed(2));
}

////// high order array function

function findEvenNumber() { Array.filter((num)=>{
    return num % 2 === 0;
})}

function sumofEvenSquare(numbers){
    const evenSquare = numbers.filter((num)=> num % 2 === 0).map((num)=>num**2).reduce((sum,square)=> sum+square,0);
    return evenSquare;
}

function highscoreWording (str){
    const words = str.split('')
    const scores = words.map((word)=>{
        let score=0; 
        for(const letter of word){
            score += letter.charCodeAt(0) - 96;
        }
        
    })
    return scores
}
export{titleCase,reverseString,countVowal,calculateTotalSaleswithTex,findEvenNumber,sumofEvenSquare,highscoreWording}