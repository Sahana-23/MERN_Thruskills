var name="Arya";
console.log(typeof(name))

var name="25";
console.log(typeof(name))

//escape charecters
var sent = "I'm learning \"JS\""
console.log(sent)

var para = "HI \n J \t \u0026 \tk ";
console.log(para)

//concatenation
var firstName = 'Java';
var lastName = 'Script';
var age = 27;

var fullName = firstName + lastName;
console.log("full name: ",fullName);


var about = "Hello, I am " + firstName +" " + lastName +". I am "+age+" years old";
console.log(about);

//coercion
console.log("\nCoercion")
var numStr = "hello"+10;
console.log("Number and string: ",numStr,"; type of:",typeof(numStr));

var boolStr = 'hi'+true;
console.log("Boolean and string: ",boolStr,"; type of:",typeof(boolStr));

var numBool = 1 + true;
console.log("Boolean and number ",numBool,"; type of:",typeof(numBool));

//String Literals
var lit = `This is " "a ' string`;
console.log(lit);

console.log(`Hello, I am ${firstName} ${lastName} I am ${age} years old. 10 years ago : ${age-10}`);