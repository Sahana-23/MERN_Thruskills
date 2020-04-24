//synchronous function
console.log("Program Starts")
function first(){
    console.log("HI")
    second()
    console.log("BYE")
}
function second(){
    console.log("Hi second")
}
first()
console.log("Program Ends")

//asynchronous function
console.log("\n *******************************************\n")
console.log("Program Starts")
function one(){
    console.log("HI")
    two()
    console.log("BYE")
}
function two(){
    console.log("Hi second")
    setTimeout(()=>console.log("Async finished"), 5000)
}
one()
console.log("Program Ends")