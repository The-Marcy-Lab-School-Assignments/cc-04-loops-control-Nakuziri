//Write your solutions in this file, don't forget to test your functions.

//1
const countFromOne = (num) => {
    for(let i = 1; i <= num; i ++){
        console.log(i);
    }
}

//countFromOne(5);

//2 
const countEveryOdd = (num) => {
    for(let i = 1; i <= num; i++) {
        if(i % 2 === 1) {
            console.log(i);
        }
    }
}

countEveryOdd(10);

//3 
const isNegative = (num) => {
    if( num < 0){
        return true;
    } else {
        return false;
    }
}
//console.log(isNegative(3));

//4

const betweenFiveAndTweny = (num) => {
    if (num > 5 && num < 20) {
        return true;
    } else {
        return false;
    }
}

//console.log(betweenFiveAndTweny(11));

//5

const sumOfThreeOrFive = () => {
    let sum = 0
    for(let i = 1; i < 1000; i++){
        if( i % 3 === 0 ||  i % 5 === 0){
        sum += i 
    }
}
    console.log(sum);
}
    

sumOfThreeOrFive();