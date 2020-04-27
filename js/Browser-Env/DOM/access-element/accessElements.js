//tagname
let headings = document.getElementsByTagName('h2')
console.log(headings)

//classname
let eleByClass= document.getElementsByClassName('test')
console.log(eleByClass)

//id
//remember ever id returns only one element since id is supposed to be unique
let eleById = document.getElementById('hello')
console.log(eleById)

//querySelector();
//querySelectorAll();

let firstHead = document.querySelector('h2');
console.log(firstHead);

let allHeadings = document.querySelectorAll('h2');
console.log(allHeadings);

let usingClass = document.querySelector('.test');
console.log(usingClass);

let usingID = document.querySelector('#hello')
console.log(usingID);

let inpt = document.querySelector('input[type="text"]');
console.log(inpt)

document.querySelector('body').style.backgroundColor = 'aqua';