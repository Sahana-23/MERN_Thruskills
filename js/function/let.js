// console.log(c); =>not initialized
// let c=20;


var n = 10;
if(true) {
    let n = 'Srinidhi';
    var marker = 'red'
    console.log('Inside if', n);
}

console.log('value of marker',marker)
console.log('value of n', n) //10 becaouse n inside if block had blockscope


function foo() {
    console.log(m); //not initialized
    let m = 30;
    console.log(m);
}



foo();