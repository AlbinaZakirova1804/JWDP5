


//import { totalCartPrice } from '/cart.js';


const main = document.querySelector('main');
const section = document.querySelector('section');

let textHeader = document.createElement('h1');
let orderNumberP =document.createElement('p');
let wraptotalItemsDiv = document.createElement('div');
let qtyDiv = document.createElement('div'); let priceDiv = document.createElement('div');


wraptotalItemsDiv.setAttribute('class', 'container row');
qtyDiv.setAttribute('class', 'col-6');
priceDiv.setAttribute('class', 'col-6');

textHeader.textContent = "Thank you! Your order was placed!";

orderNumberP.textContent = `Order number is: `+orderNumber();

var qty = totalItemInCart(items);

qtyDiv.textContent ='Total items Qty ' + qty;
priceDiv.textContent = 'Total price is $' + totalCartPrice(items);


section.appendChild(textHeader);
section.appendChild(orderNumberP);
section.appendChild(wraptotalItemsDiv);
wraptotalItemsDiv.appendChild(qtyDiv);
wraptotalItemsDiv.appendChild(priceDiv);

//console.log(main);
//orderNumber();
let a = ' ';
function orderNumber(){
    let a = Math.random().toString(10).substring(2, 15); 
    return a;
}
var items =[];
totalCartPrice(items);


function retriveExistingLocalStorageData(items){
    var retrievedData = localStorage.getItem("items");
    var items = JSON.parse(retrievedData);
    console.log(items);
    return items;
    
}

    function totalCartPrice(items){
        var totalPrice = 0;
        items = retriveExistingLocalStorageData(items);
        items.forEach((item)=>{
        console.log(item.price);
        totalPrice += item.price*item.qty 
        console.log(totalPrice);
        return totalPrice;
        });
        console.log('total cart price is '+totalPrice);
        return totalPrice;
}

function totalItemInCart(items){
    items = retriveExistingLocalStorageData(items);
    console.log("items in array" + items);
        var totalItemQty = items.length;
        console.log(totalItemQty);
        return totalItemQty;
}