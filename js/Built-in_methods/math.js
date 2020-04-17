//Properties

//The constant PI:
console.log("PI: ",Math.PI);
// Square root of 2:
console.log("Square root of 2: ",Math.SQRT2);
//Euler's constant:
console.log("Euler's Constant: ",Math.E);
// Natural logarithm of 2:
console.log("Log 2: ",Math.LN2);
// Natural logarithm of 10
console.log("log 10: ",Math.LN10);

//Some methods
console.log("2^2: ",Math.pow(2,2))
console.log("Square root of 36: ",Math.sqrt(36))
console.log("Max ",Math.max(34,56,78,23))
console.log("Min ",Math.min(34,56,78,23))

console.log("Floor: ",Math.floor(1.25));
console.log("Ceil: ",Math.ceil(1.25));
console.log("Round: ",Math.round(1.25));

//random

//random number between 0 and 1
let random = Math.random();
console.log(random);

//random number within a range
function getRandomNum(min,max){
    return parseInt(Math.random()*(max-min)+min)
}

let rn = getRandomNum(20,50);
console.log("Rn: ",rn)