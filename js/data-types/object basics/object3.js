//comparision
var obj1={
    name:"ABC"
}

var obj2={
    name:"ABC"
}

console.log(obj1.name==obj2.name)
console.log(obj1==obj2)

var obj3=obj1;

console.log(obj1==obj3)

obj3.class="2";
console.log(obj1==obj3)

console.log(obj3.year)
obj1.year=2020;
console.log(obj3.year)
console.log(obj1.class)

