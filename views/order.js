


//import { totalCartPrice } from '/cart.js';


const main = document.querySelector('main');
const section = document.querySelector('section');

let textHeader = document.createElement('h1');
let orderNumberP = document.createElement('p');

let itemDiv = document.createElement('ul');


let devider = document.createElement('hr');
let wraptotalItemsDiv = document.createElement('div');
let qtyDiv = document.createElement('div'); let priceDiv = document.createElement('div');

devider.setAttribute('width', '95%');
itemDiv.setAttribute('class', 'list-group');
wraptotalItemsDiv.setAttribute('class', 'container row');
qtyDiv.setAttribute('class', 'col-6');
priceDiv.setAttribute('class', 'col-6');


createListOfItems(items, itemDiv);


textHeader.textContent = "Thank you! Your order was placed!";

orderNumberP.textContent = `Order number is: `+orderNumber();

var qty = totalItemInCart(items);

qtyDiv.textContent ='Total Qty:  ' + qty;
priceDiv.textContent = 'Total price is $' + totalCartPrice(items);


section.appendChild(textHeader);
section.appendChild(orderNumberP);
section.appendChild(itemDiv);
//section.appendChild(devider);
section.appendChild(wraptotalItemsDiv);
wraptotalItemsDiv.appendChild(qtyDiv);
wraptotalItemsDiv.appendChild(priceDiv);

let a = ' ';

var items =[];
totalCartPrice(items);


function orderNumber(){
    let a = Math.random().toString(10).substring(2, 15); 
    return a;
}



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

    var totalItemQty = 0;
    items.forEach(obj=>{
        totalItemQty = totalItemQty +obj.qty;
        
    })
        console.log(totalItemQty);
        return totalItemQty;
}

function createListOfItems(items, itemDiv){

    items = retriveExistingLocalStorageData(items);
    items.forEach(obj=>{
        let objDiv = document.createElement('li');
        objDiv.setAttribute('class', "list-group-item");
        objDiv.textContent = obj.name + " color: "+obj.color+ "qty: " + obj.qty;
        itemDiv.appendChild(objDiv);
    })
}