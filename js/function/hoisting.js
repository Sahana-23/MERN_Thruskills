//hoisting variable
console.log(b); //=>undefined
var b=20;

//without var, variables are not hoisted
// console.log(x); => not defined
// x=20;


//hoisting in functions
add(1,2)
function add(a,b){
    console.log((a+b))
}

//hoisting doesnt occur for function expressions

addition(1,3) //=>not a function
var addition = function(a,b){
    console.log((a+b))
}

//Example
var z=10;
function xz(){
    console.log(z); //=>undefined. Since local z hets hoisted within the function scope, global z is not considered
    var z=25;
    console.log(z);
}
xz();
console.log(z);