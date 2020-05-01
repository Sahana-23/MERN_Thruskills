let body = document.querySelector('body')
function getRand(){
    let min=0,max=255;
    return parseInt(Math.random()*(max-min)+min)
}
body.style.backgroundColor = `rgb(${getRand()},${getRand()}, ${getRand()})`