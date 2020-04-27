let firstPara=document.querySelector('p')
firstPara.style.color= 'crimson';
firstPara.style.fontSize = '25px';

console.log(firstPara.style.cssText)

let secondPara=document.querySelector('#secondPara')
secondPara.style.cssText='color:teal;font-size:20px;font-weight:bolder'

let head = document.querySelector('h1')
console.log(head.classList[0])
head.className+=" jjj"
console.log(head.classList)