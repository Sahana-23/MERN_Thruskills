const http = require('http')
const url = require('url')

let server = http.createServer(function (req, res){
    let parsedUrl = url.parse(req.url,true)
    let query = parsedUrl.query

    if(parsedUrl.pathname == '/'){

        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(`Welcome ${query.name} ${query.lastname}`)

    }else if (parsedUrl.pathname == '/about'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('About Page')
    }else {
        res.writeHead(404, {'Content-type':'text/html'});
        res.end('Not Found');
    }

    // res.end(`Welcome ${query.name} ${query.lastname}`)
})

server.listen(3000,function(){
    console.log("Server Started")
})