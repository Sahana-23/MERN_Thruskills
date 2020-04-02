//normal way

function add(a,b,c){
    return a+b+c;
}

var sum = add(1,2,3)
console.log("Sum: ",sum)

//Currying
// function add(a){
//     function add2(b){
//         function add3(c){
//             return a+b+c;
//         } 
//         return add3;
//     }
//     return add2;
// }

function addition(a){
    return function (b){
        return function (c){
            return (a+b+c)
        }
    }
}

var add1 = addition(2);
console.log("add1: ", add1)
var add2 = add1(3);
console.log("add2: ", add2)
var add3 = add2(4);
console.log("add3: ", add3)

//also be written as
var add4 = addition(2)(2)(3)
console.log("add4: ",add4);


//example3

function outer(x)
{
    function inner(y){
        console.log("Inner function")
        return (x+y)
    }
    console.log("Outer function")
    return inner;
}

let oc=outer(10)
let inn = oc(5)

console.log(inn)

console.log(outer(5)(3))



