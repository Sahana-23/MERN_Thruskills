let frm= document.querySelector('form');
let para= document.querySelector('p');

frm.onsubmit = function(e){
    e.preventDefault();
    console.log(e)
    let name = document.querySelector('input[name=name]').value;
    let email = document.querySelector('input[name=email]').value; 

    if(!name || !email){
        para.innerText ="Name and Email field are required"
        para.style.color = 'red'
    }
}

let inpName = document.querySelector('input[name=name]');

inpName.onblur = function () {
    let value = inpName.value;

    if(!value){
        para.innerText = "Name is required";
        para.style.color = 'red';
        inpName.style.border = '2px solid red'
    } else if (value.length<3){
        para.innerText = "Name should me more than 3 letters";
        para.style.color = 'red';
        inpName.style.border = '2px solid red'
    } else {
        para.innerText = "";
        inpName.style.border = '2px solid green'
    }
}

let emailField = document.querySelector('input[name=email]');
emailField.onfocus = function() {
    para.innerText = 'Please provide a valid email';
    para.style.color = 'blue'
}
