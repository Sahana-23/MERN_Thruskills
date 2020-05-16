const express = require('express')
const app = express()

app.get("/", function(req,res){
    res.end("Welcome")
})

app.get("/contact",function(req,res){
    res.end("Contact Page")
})

app.listen(3000,()=>console.log("Server up and running"))