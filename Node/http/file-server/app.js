const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer(function(req,res){
    let parsedUrl = url.parse(req.url,true)
    
    if(parsedUrl.pathname == "/"){
    
        fs.readFile(__dirname+"/index.html",function(err,data){
            if(err){
                res.writeHead(500,{'Content-Type':'text/html'})
                res.end("Something went wrong!!")
            } else {
                res.writeHead(200,{'Content-Type':'text/html'})
                res.end(data)
            }
        })

    }else if(parsedUrl.pathname == "/contact" && req.method == "GET"){
        
        fs.readFile(__dirname+"/contact.html",function(err,data){
            if(err){
                res.writeHead(500,{'Content-Type':'text/html'})
                res.end("Something went wrong!!")
            } else {
                res.writeHead(200,{'Content-Type':'text/html'})
                res.end(data)
            }
        })
        
    } else if(parsedUrl.pathname == "/contact" && req.method == "POST"){

        req.on("data",function(data){
            
            let dt= Buffer.from(data).toString();
            console.log(dt)
        })

        res.end("Thank you")

    } else {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('Not Found');
    }
});

server.listen(3000,()=>console.log("Server up an running"))