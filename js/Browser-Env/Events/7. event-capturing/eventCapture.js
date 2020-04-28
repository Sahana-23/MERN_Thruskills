let outer = document.querySelector('#outer');
let inner = document.querySelector('#inner');
let btn = document.querySelector('button');

outer.addEventListener('click',function(){
    alert('Outer div clicked')
},true)

inner.addEventListener('click',function(e){
    // e.stopPropagation()
    alert('Inner div clicked')
},true)

btn.addEventListener('click',function(){
    alert('Button clicked')
},true)