function havesum(a,b){
    return a + b;
}

function haveCalculator(a,b,oper){
    let total=0;
    switch(oper){
        case "+":
            total =`${a} adds to ${b} and total is ${a+b}`;
            break;
        case "-":

            total = `${a} substract to  ${b} and result is ${a-b}`;
            break;
            case "/":
                total = `${a} devide to ${b} and result is ${a/b}`;
                break;
                case "*":
                    `${a} multiply to ${b} and total is ${a*b}`;
                    break;
                    default:
                        throw new Error("Invalid Operator");

    }
    return total;
}

function letterOccurense(sentance,letter){
    let count = 0;
    for(let i=0; i<sentance.length; i++){
        if(sentance[i] === letter){
            count++;
        }
    }
    return count;
}
function letterOccurense1(str,char){
    return str.split(char).length-1
}

function findMax(arr){
    return Math.max(...arr)
}
function findMax1(arr){
    let max = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}
console.log(haveCalculator(90,78,"/"))
console.log(havesum(51,14))
console.log(letterOccurense("my name is strange","s"))
console.log(letterOccurense1("my name is strange","s"))
let result = findMax([5,9,2,3,1,7,8,11])
console.log(result)
console.log(findMax1([55,11,33,99,22,44,66,88]))