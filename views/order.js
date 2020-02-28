

const main = document.querySelector('main');
const section = document.querySelector('section');

let textHeader = document.createElement('h1');
let orderNumberP =document.createElement('p');


textHeader.textContent = "Thank you! Your order was placed!";

orderNumberP.textContent = `Order number is: `+orderNumber();


section.appendChild(textHeader);
section.appendChild(orderNumberP);

console.log(main);
//orderNumber();
let a = ' ';
function orderNumber(){
    let a = Math.random().toString(10).substring(2, 15); 
    return a;
}