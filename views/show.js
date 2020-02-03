
//select elements on html

const section = document.querySelector('section');
const main = document.querySelector('main');

//get json for particular teddy

let dynamicURL = 'http://localhost:3000/api/teddies/5be9c8541c9d440000665243';

let newrequest = new XMLHttpRequest();

newrequest.open('GET', dynamicURL);
newrequest.responseType = 'json'; 
newrequest.send();


newrequest.onload = function() { 
const teddy = newrequest.response; 
showProduct(teddy); }

function showProduct(jsonObj) {
   const product = jsonObj;
   console.log(product);

   //div containers for two columns
   const aDiv = document.createElement('div');
   const bDiv = document.createElement('div');
   
   const newP = document.createElement('p');
   const newH5 = document.createElement('h5');
   const newImg = document.createElement('img');
   const newBut = document.createElement('button');
   const dropBut = document.createElement('button');
   const dropDown = document.createElement('div');
   const dropMenu = document.createElement('div');
   const dropItem = document.createElement("a");
    
   newH5.textContent = product.name;
    
   newP.textContent = product.description;

   newImg.src = product.imageUrl;

   newBut.textContent = "add to cart";

   dropBut.textContent = 'available colors';

   section.setAttribute('class', 'row mx-2 my-5');
   aDiv.setAttribute('class', 'col-6');
   bDiv.setAttribute('class', 'col-6')
   newImg.setAttribute('class','img-responsive rounded w-100');
   dropDown.setAttribute('class', 'dropdown');
   dropBut.setAttribute('class', 'btn btn-secondary btn-sm');
   dropItem.setAttribute('class', 'dropdown-item');
   newImg.setAttribute('alt',"teddy bear "+product.name);
   newBut.setAttribute('class', 'btn btn-primary');
    
    
    
   
   section.appendChild(aDiv);
   section.appendChild(bDiv);
   bDiv.appendChild(newH5);
   bDiv.appendChild(newP);
   //building colors drop down
   aDiv.appendChild(dropDown);
   dropDown.appendChild(dropBut);
   
   var i;
   for (i=0; i<=product.colors.lenght; i++){
      dropItem.textContent = product.color[i];
      dropMenu.appendChild(dropItem);
   }

  //colorsAvailable();
   bDiv.appendChild(newBut);
   aDiv.appendChild(newImg);
    console.log(product.colors);
    console.log(product.colors.length);
    
    for (var i=0; i<=product.colors.length; i++){
       console.log(product.colors[i]);
       dropItem.textContent = product.colors[i];
       dropMenu.appendChild(dropItem);
    }
   }

    
function colors_avail(product) {
  var i;
   for (i=0; i<=product.colors.lenght; i++){
      dropItem.textContent = product.color[i];
      dropMenu.appendChild(dropItem);
   }
}