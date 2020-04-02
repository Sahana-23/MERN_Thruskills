function add(a,b,sq){ //higher order function
    var sum=a+b;
    console.log("Sum: ",sum)
    return sq(sum)
}

function calc_sq(n){
    return n*n;
}

let square = add(1,2,calc_sq);
console.log("Square: ",square);

//

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

console.log(outer(5)(3))
