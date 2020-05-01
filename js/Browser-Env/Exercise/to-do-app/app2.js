let inp = document.querySelector('#input')
let addBtn = document.querySelector('button')
let list = document.querySelector('#displayList') 

let items = JSON.parse(localStorage.getItem('list')) ||  [];
if(items){
    for(var i=0;i<items.length;i++){
        displayList.innerHTML+=`<li><input type="checkbox"><label>${items[i]}<label></li>` 
    }
}

addBtn.onclick = function(){
    displayList.innerHTML+=`<li><input type="checkbox"><label>${inp.value}<label></li>` 
    let data = {
        val:inp.val,
        checked:false,
        disabled:false 
    }
    items.push(inp.value)
    localStorage.setItem('list', JSON.stringify(items))
}

list.onclick = function(e){
 if(e.target.matches('input')){
 e.target.nextSibling.style.textDecoration="line-through"
 e.target.disabled=true
 }
} 

