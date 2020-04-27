let para = document.querySelector('p');
console.log(para);

para.innerText="<p>This is innerText</p>"

para.innerHTML="<p>This is innerHTML</p>"

console.log(para.textContent);

console.log(para.innerHTML);

para.innerHTML+="<p>Hello world</p>";