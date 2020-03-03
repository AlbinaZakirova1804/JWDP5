


//import { totalCartPrice } from '/cart.js';


const main = document.querySelector('main');
const section = document.querySelector('section');

let textHeader = document.createElement('h1');
let orderNumberP =document.createElement('p');


textHeader.textContent = "Thank you! Your order was placed!";

orderNumberP.textContent = `Order number is: `+orderNumber();


section.appendChild(textHeader);
section.appendChild(orderNumberP);

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
        retriveExistingLocalStorageData(items);
        items.forEach((item)=>{
        console.log(item.price);
        totalPrice += item.price*item.qty 
        console.log(totalPrice);
        return totalPrice;
        });
        console.log('total cart price is '+totalPrice);
        return totalPrice;
}