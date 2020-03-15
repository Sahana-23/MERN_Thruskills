// Logical Operators
// AND &&
// OR ||
// NOT !

console.log((30 > 20) && (100 < 200));
console.log((10 > 20) || (100 < 200));

console.log((20 > 20) && (100 < 200));
console.log((10 > 20) || (100 > 200));

var a=0; //falsy value
console.log(!a)

// ternary operator
var x=10,y=20;
check=((x==10)&&(y<25))?"true":"false";
console.log("check: ",check)
check=((x<10)&&(y<25))?"true":"false";
console.log("check: ",check)

console.log(typeof(x))

