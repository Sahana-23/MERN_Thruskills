const fs = require('fs');

// Synchronous
console.log('Program Starts');
fs.writeFileSync(__dirname+'/myFile.txt', 'This is written by Node2', 'utf-8')
console.log("Program Ends")


//asynchronous
console.log('Program Starts');
fs.writeFile(__dirname+'/myFile.txt', 'Writing Using fs writeFile', function(err) {
    if(err) {
        console.log(err)
    }else {
        console.log('Successsfully Written')
    }
})
console.log("Program Ends")
