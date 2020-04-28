let ul = document.querySelector('ul');
let li = document.querySelector('#firstList');
let anc = document.querySelector('#firstAnc');

ul.onclick = function(){
 alert("UL clicked")
}

li.onclick = function(e){
    e.stopPropagation();
    alert("LI clicked")    
}

anc.onclick = function(e){
    e.stopPropagation();
    alert("Anc clicked")
}