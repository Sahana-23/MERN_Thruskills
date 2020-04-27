console.log(document)
console.dir(document)
console.log(document.documentElement)
console.log(document.documentElement.childNodes)
console.log(document.documentElement.childNodes[2])
console.log(document.documentElement.childNodes[2].childNodes)
console.log(document.documentElement.childNodes[2].childNodes[3])
console.log(document.documentElement.childNodes[2].childNodes[3].innerText)
document.documentElement.childNodes[2].childNodes[3].innerText='hi'
console.log(document.documentElement.childNodes[2].childNodes[3].innerText)
document.documentElement.childNodes[2].childNodes[3].style.color = 'red'
// console.log(document.body)
// document.body.childNodes[3].style.color="blue"