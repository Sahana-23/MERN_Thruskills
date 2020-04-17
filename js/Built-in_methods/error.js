let myError = new Error('Bad Error');
let syntaxError = new SyntaxError('Please include semicolon');
let refError = new ReferenceError('Something went wrong');


// EvalError
// InternalError
// RangeError
// TypeError
// URIError


console.log(myError);
console.log(syntaxError);
console.log(refError);

// let a = 10;
// console.log(b);
// console.log(a);

//error handling..using try and catch block

let a = 10;
// throw new Error('Own Error')

try {
    // console.log(b);
    try {
        throw new Error('Inner Error')
    } catch (error) {
        console.log(error)
    }
    throw new Error('Password Wrong');

} catch (error) {
    console.log(error.message);
    console.log(error.stack)
}



try {
    // throw new Error('Something went wrong!')
    console.log('Without any error try block')
} catch (error) {
    console.log(error)
} finally {
    let b = 10;
    console.log('In finally b is ',b);
}


console.log(a);
