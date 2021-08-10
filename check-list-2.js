// Recursive
/*
function fibonucci(n){
    
    if(n==0){
        return [0];
    }
    if(n==1){
        return [0,1];
    }
    let fibo = fibonucci(n-1)
    fibo[n] = fibo[n-1] + fibo[n-2]
    return fibo
}

console.log(fibonucci(8))
*/
// feetToInch 
/*
function feetToInch(feet){
    if(feet <0){
        return 'Give me a valid number '
    }
    let toInch = feet *12;
    return toInch
} 

console.log(feetToInch(5) +)
*/

// centimeter To Meter
/*
function centimeterToMeter(centimeter){
    if(centimeter <0){
        return 'Give me a valid number '
    }
    let toMeter = centimeter / 100;
    return toMeter
} 

console.log(centimeterToMeter(100))
*/

// paper Requirements 
/*
function paperRequirements(bookOne,bookSecound,bookThird){
    if(bookOne <0 || bookSecound<0 || bookThird <0){
        return 'Give me a number which is geaterthan 0'
    }
    else if(bookOne.typeof !='number' || bookSecound.typeof !='number' || bookThird.typeof !='number'){
        return 'Give me a integer number'
    }
    let bookOnePaper = 100;
    let bookSecoundPaper = 200;
    let bookThirdPaper = 300;

    let bookOneNeedPaper = bookOne * bookOnePaper;
    let bookSecoundNeedPaper = bookSecound * bookSecoundPaper;
    let bookThirdNeedPaper = bookThird * bookThirdPaper;
    let tatalPeper = bookOneNeedPaper + bookSecoundNeedPaper + bookThirdNeedPaper

    return tatalPeper
}


console.log(paperRequirements(1,2,1))
*/

// Best Friend 
/*
function bestFriend(friend){
    if(typeof(friend) !='object'){
        return 'Give me a object'
    }
    let largestName = friend[0];
    for (let element of friend){
        if(typeof(element) !='string'){
            return 'Give me a name'
        }
        if (element>largestName){
            largestName = element
        }
    }
    
    return largestName
} 
let friends = ['sejan','sajal','sajal','sejan-Mahmud','sejan']
console.log(bestFriend(friends))

*/

// positive Number
/*
function positiveNumber(num){
    let positive = [];
    for (let i = 0;i<num.length;i++){ 
        let element = num[i];
        if (element < 0){
            positive.push(element);
            break   
        }   
    }
    return positive
}
let number = [10,40,50,40,60,80,83,-90,45,69,50]
console.log(positiveNumber(number))

*/