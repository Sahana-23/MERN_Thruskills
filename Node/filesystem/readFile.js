const fs = require('fs')

//synchronous
console.log("Program Starts")
let data = fs.readFileSync('../intro.js','utf-8')
console.log(data)
console.log("Program Ends")

//asynchronous
console.log("Program Starts")
fs.readFile("../intro.js","utf-8",function(err,data){
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
}) 
console.log("Program Ends")

