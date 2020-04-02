//globally
var a ="Js"
console.log("a :",this.a)

function foo() {
    console.log('from function',this);
}

// function call points to global obj
foo();

//

var obj = {
    name: 'JavaScript',
    desc: function() {
        console.log(this);
    }
}

// method call points to current obj
obj.desc();

//

var obj2 = {
    name:"js",
    check: function(){
        console.log("method call: ", this)

        function inner(){
            console.log("function call: ", this)
        }
        inner();
    }
}

obj2.check();
