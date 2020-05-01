// let btn = document.querySelector('body')
let btn = document.querySelector('button')
function getRand(){
    let min=0,max=255;
    return parseInt(Math.random()*(max-min)+min)
}

btn.onclick = function(){
document.body.style.backgroundColor = `rgb(${getRand()},${getRand()}, ${getRand()})`
}