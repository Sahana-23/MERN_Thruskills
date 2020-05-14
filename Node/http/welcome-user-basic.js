const http = require('http')
const url = require('url')

let server = http.createServer(function (req, res){
    // console.log(req)
    // console.log(req.headers)
    // console.log(req.url)
    // console.log(req.method)
    let parsedUrl = url.parse(req.url,true)
    console.log(parsedUrl)
    let query = parsedUrl.query
    res.end(`Welcome ${query.name} ${query.lastname}`)
})

server.listen(3000,function(){
    console.log("Server Started")
})