//normal obj
var obj = {
    x:"s",
    s:"x"
}

//constructor function
function Person(name,age){
    this.name = name;
    this.age = age;
    this.info = function (){
        console.log("Name: ",this.name," Age: ",this.age)
    }
}

var p1 = new Person("ABC",20);
p1.info();
console.log("Person 1: ",p1);

//constructors
console.log(obj.constructor)
console.log(Person.constructor)
console.log(p1.constructor)


//Function properties - length,constructor,prototype 
console.log("Person: ",Person)
console.log("Person length: ",Person.length) // No. of parameters expected
console.log("Person Prototype: ",Person.prototype)
console.log("Person Prototype Type: ",typeof Person.prototype)
console.log("Person Prototype constructor: ",Person.prototype.constructor)
//all objects created has __proto__ which points to constructor functions prototype
console.log(p1.__proto__ == Person.prototype)

Person.prototype.gender="S"; 
console.log(p1.hasOwnProperty('gender'))
console.log(p1.constructor.hasOwnProperty('gender'))
console.log(p1.constructor.prototype.hasOwnProperty('gender'))

//toString
console.log(p1.hasOwnProperty('toString'))
console.log(p1.constructor.hasOwnProperty('toString'))
console.log(p1.constructor.prototype.hasOwnProperty('toString'))
console.log(Object.hasOwnProperty('toString'));
console.log(Object.prototype.hasOwnProperty('toString'));