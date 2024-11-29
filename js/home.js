var logout =document.querySelector('.logout');
var name = localStorage.getItem('name');
console.log(name);
var cartona = `<h1 >
                Welcome <span> ${name} </span>
            </h1>`;


document.querySelector('#Heading').innerHTML=cartona;

logout.addEventListener('click' , function(){
  window.open('index.html','_self');
})
