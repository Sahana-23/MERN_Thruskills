let userName = prompt("Enter your name: ");

if(userName){
    let newPara = document.createElement('p');
    newPara.innerText="Hello "+userName 
    document.body.appendChild(newPara)
}

let hobbies=["painting","drawing","guitar"]
let ul = document.querySelector('ul')

for(var i in hobbies){
    let li = document.createElement('li')
    li.innerText=hobbies[i]
    ul.appendChild(li)
}