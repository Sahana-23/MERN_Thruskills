// named function expression
var add = function sum(a,b){
    return (a+b);
}
// console.log(add)
console.log("named function expression: ", add(10,20))

// anonymous function expression
var add = function (a,b){
    return (a+b);
}
console.log("Anonymous function expression: ", add(10,20))

//Self-executing
// (function(){
//     console.log('Self Executing ');
// })()


//callback
//named
function foo(){
    console.log("Named callback");
}
function display(cb){
    console.log("cb = ",cb)
    cb()
}
display(foo);

//anonymous
display(function(){console.log("Anonymous callback")})


//example 2 
console.log("\n\n--Example 2--")
function add1(a,b){
    console.log("add1: Named Callback")
    return (a+b)
}

var add2 = function (a,b){
    console.log("add2: function expression Callback")
    return (a+b)
}

function sq_sum(cb,a,b){
    console.log("\ncb = ",cb)
    var sum = cb(a,b);
    console.log("sum = ",sum)
    return (sum*sum);
}

var sq=sq_sum(add1,1,2);
console.log("Square : ",sq)

var sq=sq_sum(add2,3,3)
console.log("Square : ",sq)

var sq=sq_sum(function(a,b){
    console.log("add3: function expression Callback")
    return (a+b)},2,2)
console.log("Square : ",sq)