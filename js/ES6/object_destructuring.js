//example 1
var num1,num2;
({num1,num2} = {num1:1,num2:2});
console.log("num1: ",num1)
console.log("num2: ",num2)

var obj1 = {
    name:"xyz",
    ph_no:"1222",
    city:"Bangalore"
}

var {name,ph_no:ph,city} = obj1;
console.log("Name: ",name)
console.log("Phone: ",ph)
console.log("City:", city)
