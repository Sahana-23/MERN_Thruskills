var obj = {
    fName: "abc",
    lName: "def",
    display: function(age){
        console.log(`Name: ${this.fName} ${this.lName} age: ${age}`)
    }
}
var obj2 = {
    fName: "uvw",
    lName: "xyz",
    display: function(){
        console.log(`Second Object display function\nName: ${this.fName} ${this.lName}`)
    }
}

obj.display(20);
obj2.display();

//call()

function dis(age){
    console.log(`dis function \nName: ${this.fName} ${this.lName} age:${age}`)
}

// obj.dis();
dis.call(obj,10)
dis.call(obj2,30)
//while passing multiple parameters, they are passed individually

//apply() 
dis.apply(obj,[40])
dis.apply(obj2,[40])
//while passing multiple parameters, they are passed together in an array

//bind() => does not execute function immediately, just returns the function binding the references

var details = dis.bind(obj)
console.log("Details:",details)
details(23);

//can use call and apply to bind one object to another
obj.display.call(obj2,90)