
//select placeholder on html
const section = document.querySelector('section');
const main = document.querySelector('main');
//****************************************/

//get params _id for a single teddy from passed current url
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
//*******************************************/
//get teddy data
async function getData() 
       {try                // try to load data
         {
         let dynamicURL= `http://localhost:3000/api/teddies/${getParameterByName('_id')}`;
            //await the response of the fetch call
           let response = await fetch(dynamicURL);
            //proceed once the first promise is resolved.
           let data = await response.json()
            //proceed only when the second promise is resolved
            return data;
        } catch(e){        //if it fails, catch an error      
           console.error(e);
           var errorMessage = document.createElement('p');
         errorMessage.setAttribute('class', 'text-info text-center');
         errorMessage.textContent = "There was a loading error. Please try to refresh your page."
         document.querySelector('main').appendChild(errorMessage); 
        } finally {        //
         
         console.log('There waa a data loading error.');
        }
      } 
//call getData function
getData()
.then(teddy => showProduct(teddy));//show the data

//************************************************* */
/*let dynamicURL = `http://localhost:3000/api/teddies/${getParameterByName('_id')}`;
// get teddy object
fetch(dynamicURL)
.then(res => res.json())// response type
.then(teddy =>showProduct(teddy));
*/

/*let dynamicURL = `http://localhost:3000/api/teddies/${getParameterByName('_id')}`;
let newrequest = new XMLHttpRequest();
newrequest.open('GET', dynamicURL);
newrequest.responseType = 'json'; 
newrequest.send();
newrequest.onload = function() { 
const teddy = newrequest.response; 
showProduct(teddy); }
*/

// ***************build single object content on a web page*****************
function showProduct(jsonObj) {
   const product = jsonObj;

//create two div containers for two columns
   const aDiv = document.createElement('div'); //left side for image
   const bDiv = document.createElement('div'); //right side for description

// create content inside thoes containers
   const newP = document.createElement('p');
   const newH5 = document.createElement('h5');
   const newImg = document.createElement('img');
   const alertMessage = document.createElement('p'); //message if item was added to cart message 

   //set attributes for alert message paragraph
   alertMessage.setAttribute('class', 'alert alert-success');
   alertMessage.setAttribute('id', 'added to cart');
   alertMessage.setAttribute('role', 'alert');

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

   aDiv.setAttribute('class', 'col-md-12 col-lg-6');
   bDiv.setAttribute('class', 'col-md-12 col-lg-6')

   newImg.setAttribute('class','img-responsive rounded w-100');
   newImg.setAttribute('alt',"teddy bear "+product.name);

   alertMessage.setAttribute('class', 'text-success');

   dropDown.setAttribute('class', 'dropdown');
   dropBut.setAttribute('class', 'btn btn-secondary dropdown-toggle btn-sm');
   dropBut.setAttribute("type", "button");
   dropBut.setAttribute("data-toggle", "dropdown");

   dropSpan.setAttribute('class', "caret");
   
   addToCartBut.setAttribute('class', 'btn btn-primary');
   addToCartBut.setAttribute('id', 'addToCart');

   newUl.setAttribute("class", "dropdown-menu");
    
//***************append/build content on a page**************
//section -> left container aDiv -> newImg -> div dropDown ->...
//        -> right container bDiv -> newH5 -> addToCartBut button
   section.appendChild(aDiv); 
   section.appendChild(bDiv);    
   //bDiv                          
   bDiv.appendChild(newH5);   
   bDiv.appendChild(newP);
   bDiv.appendChild(addToCartBut);
   bDiv.appendChild(alertMessage);
   //aDiv
   aDiv.appendChild(newImg);
   //building colors drop down
   aDiv.appendChild(dropDown);
   dropDown.appendChild(dropBut);
   dropBut.appendChild(dropSpan);
   dropDown.appendChild(newUl);   
   
   //building colors in drop down
   for (var i=0; i<product.colors.length; i++){
       console.log(product.colors[i], i);
       const dropItem = document.createElement("li");
       dropItem.setAttribute('class', 'dropdown-item');
       dropItem.setAttribute('value', product.colors[i])
       dropItem.textContent = product.colors[i];
       newUl.appendChild(dropItem);
    }
//defined global variable item object
  var item = {};
  
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
//***********listening for ***click on "add to cart" button**************/
document.getElementById('addToCart').addEventListener('click', addToCart);

function addToCart() {
   // do something if color was picked or show error message if color was not picked
   //color validation
   if (item.color !== undefined) {
         item.id = product._id
         item.name = product.name;
         item.qty = 1;
         item.price = product.price/100;
         var items = [];

         /*push new object into local storage if it is empty if local storage is not empty,
          retrive all objects into items array push new object intp it*/
         if (localStorage.length === 0)
         {      
            items.push(item);
         }else
         {
            var retrievedData = localStorage.getItem("items");
            var items = JSON.parse(retrievedData);
            checkForDuplicates(items, item); //check for duplicates and push to items array????
         }
        
         //inserting all object into local storage
         localStorage.setItem( 'items', JSON.stringify(items) );
        
         //set alertMessage to display "show"
         document.getElementById("added to cart").style.display="block";
         
         //show alert message
         alertMessage.textContent = 'item successfully added to your cart';// add to duplicate function

         // close the div in 2 secs
         window.setTimeout("closeAlertMessage();", 2000);


         //alert('item was added to the cart');
         console.log(localStorage);
   } else 
         {alert('Please choose you teddy color!' );}
   };
   };
//***************************** */
//hide alert message in 2 sec
function closeAlertMessage(){
   document.getElementById("added to cart").style.display=" none";
   }

//check for duplicates in items array and add qty if it exists if not just push into array
function checkForDuplicates(items, item){
 let obj = items.find(obj => (obj.id === item.id)&&(obj.color === item.color));
if ( obj ) {
   console.log('you already have the same item in the same color');
   var index = items.indexOf(obj);
          console.log(index);
          items[index].qty += 1;
} else {
   items.push(item);
   console.log('new item was added to your carts');
}
};
