// Arithmetic Operators

// Addition +
// Subtraction -
// Multiplication *
// Division /
// Modulus %
// Increment ++
// Decrement --

// addition
var addition = 10 + 2;
console.log("Sum: ",addition);

// Substraction
var subs = 10 - 15;
console.log("Diff: ",subs);

//Multiplication
var mul = 12 * 5;
console.log("Prod: ",mul);

//Division
var div = 31 / 3;
console.log("Quotient: ",div);

// modulus
var mod = 31 % 3;
console.log("Remainder: ",mod);

//Increment
var a=10;
console.log("\nIncrement Operator:")
console.log("a: ", a)

//post-increment=> a++
console.log("\nPost-increment");
console.log("a++: ", a++);
console.log("a: ", a);

//pre-increment=> ++a
console.log("\nPre-increment");
console.log("++a: ",++a);
console.log("a: ", a);

//solve expression 
exp= ++a + 2;
console.log("\nSolve Expressions:");
console.log("++a + 2 = ", exp," a: ", a);

exp= a++ + 2;
console.log("\nSolve Expressions:");
console.log("a++ + 2 = ", exp," a: ", a);

a=1;
exp= a++ + 1 + ++a + a;
console.log("\nSolve Expressions:");
console.log("a++ + 1 + ++a + a = ", exp," a: ", a);

//same with decrement operator