
//import { totalCartPrice } from '/cart.js';

//select elements on a web page
const main = document.querySelector('main');
const section = document.querySelector('section');

//create new element
let textHeader = document.createElement('h1');
let orderNumberP = document.createElement('p');
let itemDiv = document.createElement('ul');

let devider = document.createElement('hr');
let wraptotalItemsDiv = document.createElement('div');
let qtyDiv = document.createElement('div'); 
let priceDiv = document.createElement('div');

//set attributes
devider.setAttribute('width', '95%');
itemDiv.setAttribute('class', 'list-group');
wraptotalItemsDiv.setAttribute('class', 'container row');
qtyDiv.setAttribute('class', 'col-6');
priceDiv.setAttribute('class', 'col-6');

createListOfItems(items, itemDiv); // visualize list of products

//set element's content 
textHeader.textContent = "Thank you! Your order was placed!";
orderNumberP.textContent = `Order number is: `+orderNumber();

var qty = totalItemInCart(items); // count total qty of products in a cart

qtyDiv.textContent ='Total Qty:  ' + qty;
priceDiv.textContent = 'Total price is $' + totalCartPrice(items);

//create layout
section.appendChild(textHeader);
section.appendChild(orderNumberP);
section.appendChild(itemDiv);
section.appendChild(wraptotalItemsDiv);
wraptotalItemsDiv.appendChild(qtyDiv);
wraptotalItemsDiv.appendChild(priceDiv);

var items =[];
localStorage.clear(); //empty local storage after order was plased

// create order number
function orderNumber(){
    let a = Math.random().toString(10).substring(2, 15); 
    return a;
}

//retrive data from local storage into items array
function retriveExistingLocalStorageData(items){
    var retrievedData = localStorage.getItem("items");
    var items = JSON.parse(retrievedData);
    console.log(items);
    return items;
}

//count total price in a cart
function totalCartPrice(items){
    var totalPrice = 0;
    items = retriveExistingLocalStorageData(items);
    items.forEach((item)=>{
        console.log(item.price);
        totalPrice += item.price*item.qty 
    });
        return totalPrice;
}

//count total items qty in a cart
function totalItemInCart(items){
    items = retriveExistingLocalStorageData(items);
    var totalItemQty = 0;
    items.forEach(obj=>{
        totalItemQty = totalItemQty +obj.qty;
    })
        return totalItemQty;
}

//create list of items on order page
function createListOfItems(items, itemDiv){

    items = retriveExistingLocalStorageData(items);
    items.forEach(obj=>{
        let objDiv = document.createElement('li');
        objDiv.setAttribute('class', "list-group-item");
        objDiv.textContent = obj.name + ", color: "+obj.color+ ", qty: " + obj.qty;
        itemDiv.appendChild(objDiv);
    })
}