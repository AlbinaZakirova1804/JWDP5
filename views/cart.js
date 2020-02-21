console.log(localStorage);

//select elements placeholder on html

const main = document.querySelector('main');
const section = document.querySelector('section');

//creat content 
const newDiv = document.createElement('div');
const cartHeadding = document.createElement('h1');
const newP = document.createElement('p');

//set attrivutes
section.setAttribute('class', 'row mx-2 my-3 text-center');
cartHeadding.setAttribute('class', 'text-center');
newDiv.setAttribute('class', 'col-2');



//set content
cartHeadding.textContent = 'Welcome to your cart!';
//build the view of items in a cart
if (localStorage.length == null)
         {
            console.log('local storage is empty');
            cartHeadding.textContent = 'Your cart is emty!';
}else
         {
            var retrievedData = localStorage.getItem("items");
            var items = JSON.parse(retrievedData);
            items.forEach((item) => {
                console.log(item.name);
});

            console.log('I am a cart');
         };


//built page
main.appendChild(cartHeadding);
section.appendChild(newDiv);
newDiv.appendChild(newP);


//for (var i = 0; storage.length < i; i++ ){
    console.log(localStorage.getItem('items'));
//}