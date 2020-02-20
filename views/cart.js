console.log(localStorage);

//select elements placeholder on html

const main = document.querySelector('main');
const section = document.querySelector('section');

//creat content 
const newDiv = document.createElement('div');
const cartHeadding = document.createElement('h1');

//set attrivutes
section.setAttribute('class', 'row mx-2 my-3 text-center');
cartHeadding.setAttribute('class', 'text-center');
newDiv.setAttribute('class', 'col-2');


//set content
cartHeadding.textContent = 'Welcome to your cart!'


//built page
main.appendChild(cartHeadding);
section.appendChild(newDiv);


//for (var i = 0; storage.length < i; i++ ){
    console.log(localStorage.getItem('items'));
//}