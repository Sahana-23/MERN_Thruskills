let btn = document.querySelector('button')

btn.addEventListener('click',function(){
    alert("first click event");
})

btn.addEventListener('click',function(){
    alert("second click event");
})

function thirdHandler(){
    alert("third click event");
    btn.removeEventListener('click',thirdHandler)
}

btn.addEventListener('click', thirdHandler)

// btn.removeEventListener('click',thirdHandler)

