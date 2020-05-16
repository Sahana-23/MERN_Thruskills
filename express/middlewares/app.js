const express = require('express')
const app = express()

const fs = require('fs')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

function logger(req,res,next){
    console.log(req.method+" "+req.url)
    next()
}

app.use(logger)

app.use(function(req,res,next){
    console.log("Second middleware")
    next()
})

function routeMiddleware(req,res,next){
    console.log("Route middleware for about us")
    next()
}
app.get('/', function(req,res){
    res.end("Welcome")
})

app.get("/about", routeMiddleware ,function(req,res){
    res.end("About Us")
})

app.get("/content",function(req, res,next){
    fs.readFile(__dirname+"/package.json",function(err,data){
        if(err){
            next(err)
        } else {
            res.end(data)
        }
    })
})

//use postman
app.post("/contact",function(req,res){
    // res.end("Thank you")
    console.log(req.body)
    res.json(req.body)
})

//
app.get("/:product",function(req,res){
    console.log(req.params)
    console.log(req.params.product)
    res.end()
})

app.use(function(req,res,next){
    res.status(404).end("Not found")
})

app.use(function(err,req,res,next){
    console.log("Error: ",err)
    res.status(500).end("Something Went wrong")
})

app.listen(3000,()=>console.log("Server up and running"))