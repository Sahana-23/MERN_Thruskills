const PI=3.14;

//PI=5; =>TypeError: Assignment to constant variable.


const obj = {
    name : 'js'
}
obj.name = 'Javascript';
// obj={name:"jss"} =>TypeError: Assignment to constant variable.
console.log(obj);

//
// console.log(b); //=>ReferenceError: Cannot access 'b' before initialization
// const b=20;

//
const a; //=> Missing initializer in const declaration
console.log(a);
a=12;