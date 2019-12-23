//select elements on html
const section = document.querySelector('section');
const main = document.querySelector('main');

//get json
let requestURL = 'http://localhost:3000/api/teddies';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json'; 
request.send();

request.onload = function() { 
    const teddies = request.response; 
showProduct(teddies); }

const newNav = document.createElement('nav');
main.appendChild(newNav);

//Creating new Elements
function showProduct(jsonObj) {
const products = jsonObj;
for (let i = 0; i < products.length; i++) {
const newDiv = document.createElement('div');
const newH5 = document.createElement('h5');
const newP = document.createElement('p');

const newImg = document.createElement('img');

newImg.src = products[i].imageUrl;
section.setAttribute('class', 'row mx-2 my-5');
newImg.setAttribute('class','img-responsive rounded w-100');
newImg.setAttribute('alt',"");
newDiv.setAttribute('class', 'col-6 col-sm-4 col-lg-3');

newH5.textContent = products[i].name;
newP.textContent ='$'+ products[i].price/100;

section.appendChild(newDiv);
newDiv.appendChild(newImg);
newDiv.appendChild(newH5);
newDiv.appendChild(newP);
 }
}
 
fetch("../includes/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });