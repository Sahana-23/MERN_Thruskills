const express = require('express')
const app = express()
const hbs = require('hbs')

app.set('views',__dirname+"/views")
app.set('view engine','hbs')
hbs.registerPartials(__dirname+"/views/partials")

app.get("/",function(req,res){
    let age = 20;
    res.render("index",{
        name:"Sahana",
        title:"Home",
        htmlData:"<p>This is a paragraph</p>",
        hobbies: ['Football', 'Reading','Coding'],
        eligibility: age > 18 ? true : false,
        education : {
            degree: 'Bachelors',
            grade: 'A',
            YOP: 2020
        },

        products: [
            {
                name:'Samsung',
                price:2000
            },
            {
                name:'Iphone',
                price:1000
            },
            {
                name:'Lenovo',
                price:3000
            } 
        ]
    })
})

app.get("/contact",function(req,res){
    res.render("contact",{
        title:"Contact"
    })
})

app.listen(3000,()=>console.log("Server up and running"))