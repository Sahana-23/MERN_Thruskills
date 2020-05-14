const http = require('http')

http.createServer(function(req,res){
    res.end("Hello")
}).listen(3000,function(){
    console.log("Server running")
})