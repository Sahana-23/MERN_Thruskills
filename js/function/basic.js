//function => no parameters
function display(){
    console.log("Hello World!!")
}

display();

//function => parameters
function add1(a,b){
    console.log("Sum: ",(a+b));
}
add1(2,3);

function add2(a,b){
    return (a+b)
}
var res= add2(2,3);
console.log(res);

//Undefined

function add3(a,b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return ;
    }

    console.log('Executing body')
    return a+b;
}

console.log("Sum: ", add3(1,2))
console.log("Sum: ", add3('1',2))

//if we pass less parameters than expected,then they are considered undefined
console.log("Sum: ", add3(1))
//if we pass more parameters than expected,then the extras are simply ignored
console.log("Sum: ", add3(1,2,2,4,5))

//default parameters
function sum(a=5,b=5){
    return a+b;
}

var addition = sum(4,3)
console.log("ADD: ",addition)

var addition = sum(10)
console.log("ADD: ",addition)

var addition = sum()
console.log("ADD: ",addition)

//arguments 

function add4(){
    console.log(arguments);
    
    var sum = 0;

    for(var i =0; i<arguments.length;i++){
        sum += arguments[i];
    } 
    return sum;
}

var res4 = add4(1);
console.log("Sum: ",res4)

var res4 = add4(3,4,1);
console.log("Sum: ",res4)

var res4 = add4(2,2,4,1,2,5);
console.log("Sum: ",res4)