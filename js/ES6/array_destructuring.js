//example 1
var [num1,num2]=[1,2]
console.log(`Num1: ${num1}, Num2: ${num2}`)

//example 2
scores = [10,20,15,18]

//instead of individually accesing each item in scores[], eng = scores[0], math = scores[1] ...... we can destructure the array
var [eng,math,science,history] = scores

console.log("eng: ",eng)
console.log("math: ",math)
console.log("science: ",science)
console.log("history: ",history)