
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
   
  localStorage.clear();
  
  item = {};
  
  
//listening to color drop down click Event----------------------/
//pick an elements from dropdown-menu//
var elements = document.getElementsByClassName('dropdown-item');
//get color//
Array.from(elements).forEach((element) => {
 // var pickedColor;
   element.addEventListener('click', (event) => {
      var pickedColor = event.target.innerText;
   console.log('Clicked '+ pickedColor+ '!');
   item.color = pickedColor;
   dropBut.textContent =item.color;
   });
});
//-------------------------------------------------------------
//****************************** */
document.getElementById('addToCart').addEventListener('click', addToCart);
function addToCart() {
   // remove event listener if collor is not picked
   if (item.color !== undefined) {
         console.log(product.name);
         //item.color=getColor;
         item.id = product._id
         item.name = product.name;
         item.qty = 1;
         item.price = product.price/100;
         console.log( item );
         console.log(item.color);

         var items = [];

         if (localStorage.length === 0)
         {      

            console.log('local storage is empty')
            items.push(item);
         }else
         {
            var retrievedData = localStorage.getItem("items");
            var items = JSON.parse(retrievedData);
            console.log('yaeh, im an array'+items)
           // items.forEach((item)=> {
            checkForDuplicates(items, item);
            
            console.log('local storage is not emprty');
         }
         
         console.log(items);
        // items.push(item);
         //inserting product object into local storage
         localStorage.setItem( 'items', JSON.stringify(items) );
         alert('item was added to the cart');
         console.log(localStorage);
   } else 
         {alert('Please choose you teddy color!' );}
   };
   };
//***************************** */

function checkForDuplicates(items, item){
   items.forEach(element=> {
       console.log(element.id);
//does item already exist
       if (item.id !== element.id) {
       //if yes push
       //console.log('I an a new item!');
       items.push(item);
       } else if (item.color !== element.color){
       items.push(item);
//console.log('I do exist but ');
       } else {
   var index = items.indexOf(element);
   console.log(index);
   items[index].qty += 1;
   
   console.log("my quantaty was changed to -> "+ items[index].qty);
       }
   } )
}
