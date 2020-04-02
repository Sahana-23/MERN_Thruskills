var g= "global scope";

if(true) {
    var b = 50;
    console.log(b);
}
console.log('Accessing b in global ', b);

function testScope(){
    var l="Local scope";
    console.log(g);
    console.log(l);
    console.log(b);
    x=10; //=> variables with no var assume global scope
}

testScope();
console.log(x);
// console.log(l); => error: l is not defined 

//functions
function outer() {
    var outVar = 50; 

    function inner() {
        var innerVar = 100;
        console.log('Outer scope fn', outVar)
    }

    inner();

    // console.log('Outer scope fn', innerVar);=>error

}

outer();

// inner() => not defined

