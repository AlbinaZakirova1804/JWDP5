console.log(localStorage);

//select elements placeholder on html

const main = document.querySelector('main');
const section = document.querySelector('section');

//creat content 
const containerDiv = document.createElement('div');
const cartHeadding = document.createElement('h1');
//const nameDiv = document.createElement('div');
//const colorDiv = document.createElement('div');
//const priceDiv = document.createElement('div');
//const placeHolder = document.createElement('div');


//set attrivutes
section.setAttribute('class', 'row mx-2 my-3 text-center');
cartHeadding.setAttribute('class', 'text-center m-y-5');
//outerDiv.setAttribute('class', 'col-4');

cartHeadding.textContent = 'Welcome to your cart!';
section.appendChild(cartHeadding);


//built page
//section.appendChild(itemDiv);

//set content
//cartHeadding.textContent = 'Welcome to your cart!';
//build the view of items in a cart
if (localStorage.length == null)
         {
            console.log('local storage is empty');
            cartHeadding.textContent = 'Your cart is emty!';
}else
         {
            var retrievedData = localStorage.getItem("items");
            var items = JSON.parse(retrievedData);
            //building cart content
            items.forEach((item) => {
                console.log(item.name);
                const itemDiv = document.createElement('div');
                itemDiv.setAttribute('class', 'container row');
                section.appendChild(itemDiv);
//create name Div
                const nameDiv = document.createElement('div');
                        nameDiv.setAttribute('class','item-name col-3')
                            const nameH6 =document.createElement('h6');
                            nameH6.textContent = item.name;

                     itemDiv.appendChild(nameDiv);
                     nameDiv.appendChild(nameH6);
                
//create color Div
                const colorDiv = document.createElement('div');
                        colorDiv.setAttribute('class', 'item-color col-3');
                            const colorH6 = document.createElement('h6');
                            colorH6.textContent = item.color;

                    itemDiv.appendChild(colorDiv);
                    colorDiv.appendChild(colorH6);

//create price Div
                const priceDiv = document.createElement('div');
                        priceDiv.setAttribute('class', 'item-color col-3');
                            const priceH6 = document.createElement('h6');
                            priceH6.textContent = '$'+item.price;

                    itemDiv.appendChild(priceDiv);
                    priceDiv.appendChild(priceH6);

// create remove button
                const placeHolderDiv = document.createElement('div');
                        placeHolderDiv.setAttribute('class', 'item-remove col-3');
                        const removeBut = document.createElement('button');
                        removeBut.setAttribute('class', 'btn btn-link');
                        removeBut.textContent = 'remove';

                    itemDiv.appendChild(placeHolderDiv);
                    placeHolderDiv.appendChild(removeBut);
               
//********************************************************************************** */
             
});

            console.log('I am a cart');
         };






//for (var i = 0; storage.length < i; i++ ){
    //console.log(localStorage.getItem('items'));
//}