console.log(localStorage);

//select elements placeholder on html

const main = document.querySelector('main');
const section = document.querySelector('section');

//creat content 
const containerDiv = document.createElement('div');
const cartHeadding = document.createElement('h1');


//set attrivutes
section.setAttribute('class', 'row mx-2 my-3 text-center');
cartHeadding.setAttribute('class', 'text-center m-y-5');
//containerDiv.setAttribute('class', 'row');

cartHeadding.textContent = 'Welcome to your cart!';
section.appendChild(containerDiv);
containerDiv.appendChild(cartHeadding);



//set content

//build the view of items in a cart
if (localStorage.length === 0)
         {
            console.log('local storage is empty');
            cartHeadding.textContent = 'Your cart is emty!';
}else
         {
            var retrievedData = localStorage.getItem("items");
            var items = JSON.parse(retrievedData);
            //building cart content
            items.forEach((item) => {
               // console.log(item.name);
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

//create qty Div
                const qtyDiv = document.createElement('div');
                        qtyDiv.setAttribute('class', 'item-qty col-2');
                                const qtyH6 = document.createElement('h6');
                                qtyH6.textContent = item.qty;

                        itemDiv.appendChild(qtyDiv);
                        qtyDiv.appendChild(qtyH6);

//create price Div
                const priceDiv = document.createElement('div');
                        priceDiv.setAttribute('class', 'item-color col-2');
                            const priceH6 = document.createElement('h6');
                            priceH6.textContent = '$'+item.price*item.qty;

                    itemDiv.appendChild(priceDiv);
                    priceDiv.appendChild(priceH6);

// create remove button
               // const placeHolderDiv = document.createElement('div');
               //         placeHolderDiv.setAttribute('class', 'item-remove col-2');
                //        const removeBut = document.createElement('button');
                //        removeBut.setAttribute('class', 'btn btn-link');
                //        removeBut.setAttribute('id', item.id);
                //        removeBut.textContent = 'remove';
//
   //                 itemDiv.appendChild(placeHolderDiv);
  //                  placeHolderDiv.appendChild(removeBut);
               
//********************************************************************************** */

            }
             
            )};
            totalCartPrice(items);

            //const totalP = document.createElement(p);
            //totalP.textContent = "TOTAL "
            //containerDiv.appendChild(totalP);


         
        





//add listener event to REMOVE button
         document.getElementsByClassName('btn btn-link').addEventListener('click', removeFromCart, false);
         function removeFromCart(e) {
                 if (e.target !== e.currentTarget) {
                         var clickedItem = e.target.id;
                         console.log(clickedItem);
                 }
         }


function totalCartPrice(items){
        let totalPrice = 0;
        retriveExistingLocalStorageData(items);
        items.forEach((item)=>{
                console.log(item.price);
        totalPrice += item.price
        console.log(totalPrice);
        return totalPrice;
        });
        console.log('total cart proce is '+totalPrice);
        return totalCartPrice;
}

function retriveExistingLocalStorageData(items){
        var retrievedData = localStorage.getItem("items");
        var items = JSON.parse(retrievedData);
        return items;
}