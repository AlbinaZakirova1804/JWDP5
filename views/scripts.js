

//select elements on html

const main = document.querySelector('main');
const section = document.querySelector('section');
document.querySelector('header').innerHTML = 
"<h2>navigation pending</h2>";



//get json

let requestURL = 'http://localhost:3000/api/teddies';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json'; 
request.send();

request.onload = function() { 
    const teddies = request.response; 
    console.log(teddies);
showProduct(teddies); }

//Creating new Elements
function showProduct(jsonObj) {
const products = jsonObj;
for (let i = 0; i < products.length; i++) {
const newA = document.createElement('a');
const newDiv = document.createElement('div');
const newH5 = document.createElement('h5');
const newP = document.createElement('p');
const newImg = document.createElement('img');

newImg.src = products[i].imageUrl;

//set attributes
section.setAttribute('class', 'row mx-2 my-5');
newImg.setAttribute('class','img-responsive rounded w-100');
newImg.setAttribute('alt',"teddy bear"+i);
newImg.setAttribute('id', products[i]._id);
newA.setAttribute('href', `./teddy.html`+'?'+'_id='+`${products[i]._id}`);

//newA.setAttribute('href', './show.html');
//newA.setAttribute('onclick', 'return singleTeddyURL()');

newDiv.setAttribute('class', 'card col-6 col-sm-4 col-lg-3');

//set content
newH5.textContent = products[i].name;
newP.textContent ='$'+ products[i].price/100;

//built page
section.appendChild(newDiv);
newDiv.appendChild(newA);

newA.appendChild(newImg);
//newDiv.appendChild(newImg);
newDiv.appendChild(newH5);
newDiv.appendChild(newP);
};

//section.addEventListener('click', TeddyURL, false);
//function TeddyURL(e)
//{
//if (e.target !== e.currentTarget){
//    console.log(e.target);
 //   let clicked = e.target.id;

    
//    var a = document.getElementById(clicked);

//    return clicked;
//**********************************//
}