
//select elements placeholder on html

const section = document.querySelector('section');
const main = document.querySelector('main');

//get params _id for a single teddy from current url
function getParameterByName(key, url) {
   if (!url) url = window.location.href;
   key = key.replace(/[\[\]]/g, '\\$&');
   var regex = new RegExp('[?&]' + key + '(=([^&#]*)|&|#|$)'),
       results = regex.exec(url);
   if (!results) return null;
   if (!results[2]) return '';
   console.log(decodeURIComponent(results[2].replace(/\+/g, ' ')));
   return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//get json object for single teddy
let dynamicURL = `http://localhost:3000/api/teddies/${getParameterByName('_id')}`;
let newrequest = new XMLHttpRequest();

newrequest.open('GET', dynamicURL);
newrequest.responseType = 'json'; 
newrequest.send();


newrequest.onload = function() { 
const teddy = newrequest.response; 
showProduct(teddy); }

// ***************build content on a page*****************
function showProduct(jsonObj) {
   const product = jsonObj;
   console.log(product);

//create two div containers for two columns
   const aDiv = document.createElement('div');
   const bDiv = document.createElement('div');

// create content inside thoes containers
   const newP = document.createElement('p');
   const newH5 = document.createElement('h5');
   const newImg = document.createElement('img');

// create colors dropdown
   const addToCartBut = document.createElement('button');
   const dropBut = document.createElement('button');
   const dropSpan = document.createElement('span');
   const dropDown = document.createElement('div');
   const newUl = document.createElement('ul');
    
//******************add text content***************/
   newH5.textContent = product.name;
    
   newP.textContent = product.description;

   newImg.src = product.imageUrl;

   addToCartBut.textContent = "add to cart";

   dropBut.textContent = 'available colors';

   
// set attributes to classes
   section.setAttribute('class', 'row mx-2 my-5');

   aDiv.setAttribute('class', 'col-6');
   bDiv.setAttribute('class', 'col-6')

   newImg.setAttribute('class','img-responsive rounded w-100');
   newImg.setAttribute('alt',"teddy bear "+product.name);

   dropDown.setAttribute('class', 'dropdown');
   dropBut.setAttribute('class', 'btn btn-secondary dropdown-toggle btn-sm');
   dropBut.setAttribute("type", "button");
   dropBut.setAttribute("data-toggle", "dropdown");

   dropSpan.setAttribute('class', "caret");
   
   addToCartBut.setAttribute('class', 'btn btn-primary');
   addToCartBut.setAttribute('id', 'addToCart');

   newUl.setAttribute("class", "dropdown-menu");
    
//***************built content on a page**************
//section -> left container aDiv -> newImg -> div dropDown ->...
//        -> right container bDiv -> newH5 -> addToCartBut button
   section.appendChild(aDiv); 
   section.appendChild(bDiv);    
   //bDiv                          
   bDiv.appendChild(newH5);   
   bDiv.appendChild(newP);
   bDiv.appendChild(addToCartBut);
   //aDiv
   aDiv.appendChild(newImg);
   //building colors drop down
   aDiv.appendChild(dropDown);
   dropDown.appendChild(dropBut);
   dropBut.appendChild(dropSpan);
   dropDown.appendChild(newUl);   

   //aDiv.appendChild(newImg);
    console.log(product.colors);
    console.log(product.colors.length);
   
   //building colors in drop down
   for (var i=0; i<product.colors.length; i++){
       console.log(product.colors[i], i);
       const dropItem = document.createElement("li");
       dropItem.setAttribute('class', 'dropdown-item');
       dropItem.setAttribute('value', product.colors[i])
       dropItem.textContent = product.colors[i];
       newUl.appendChild(dropItem);
    }
   //
  //localStorage.clear();
  var item = product.name; 
  item = {};
  //var pickedColor; 
  item = {};
  
//listening to color drop down click Event----------------------
//pick an elements from dropdown-menu//
var elements = document.getElementsByClassName('dropdown-item');
//get color//
Array.from(elements).forEach((element) => {
 // var pickedColor;
   element.addEventListener('click', (event) => {
      var pickedColor = event.target.innerText;
   console.log('Clicked '+ pickedColor+ '!');
   item.color = pickedColor;
   });
});
//-------------------------------------------------------------



//document.getElementById('addToCart').addEventListener('click', () => {
// remove event listener if collor is not picked
///if (item.color == null) {
  // alert('Please choose you teddy color!' );
  // this.removeEventListener('click',  );
//} else{
//console.log(product.name);

//var item = product.name; 
//item = {};



//item.color=getColor;
//item.price = product.price/100;
//console.log( item );
//console.log(item.color);
//localStorage.setItem( product.name, JSON.stringify(item) );
//console.log( JSON.parse( localStorage.getItem( item ) ) );

//alert('item was added to the cart');
//console.log(localStorage);
//}
//});
//};
 
//****************************** */
document.getElementById('addToCart').addEventListener('click', addToCart);
function addToCart() {
   // remove event listener if collor is not picked
   if (item.color !== undefined) {
   console.log(product.name);
   //item.color=getColor;
   item.price = product.price/100;
   console.log( item );
   console.log(item.color);
   //inserting product object into local storage
   localStorage.setItem( product.name, JSON.stringify(item) );
   alert('item was added to the cart');
   console.log(localStorage);
   } else {alert('Please choose you teddy color!' );}
   };
   };
//***************************** */

