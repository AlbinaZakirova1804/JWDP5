console.log(localStorage);

//select elements placeholder on html

const main = document.querySelector('main');
const section = document.querySelector('section');

//creat content 
const wrapContainerDiv = document.createElement('div');
const wrapCartItemsInfo = document.createElement('div');
const wrapCartItemsRemove = document.createElement('div');
const cartHeadding = document.createElement('h1');


//set attrivutes
section.setAttribute('class', 'container mx-2 my-3 text-center');
//cartHeadding.setAttribute('class', 'text-center m-y-5');
//containerDiv.setAttribute('class', 'row');
wrapContainerDiv.setAttribute('class', 'container mt-5 row');
wrapCartItemsInfo.setAttribute('class', 'col-10');
wrapCartItemsInfo.setAttribute('id', 'left');
wrapCartItemsRemove.setAttribute('class', 'remove container col-2');
wrapCartItemsRemove.setAttribute('id', 'right');


cartHeadding.textContent = 'Welcome to your cart!';
section.appendChild(cartHeadding);
section.appendChild(wrapContainerDiv);
wrapContainerDiv.appendChild(wrapCartItemsInfo);
wrapContainerDiv.appendChild(wrapCartItemsRemove);



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
                itemDiv.setAttribute('class', 'container row mt-3');
                wrapCartItemsInfo.appendChild(itemDiv);
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
                        qtyDiv.setAttribute('class', 'item-qty col-3');
                                const qtyH6 = document.createElement('h6');
                                qtyH6.textContent = item.qty;

                        itemDiv.appendChild(qtyDiv);
                        qtyDiv.appendChild(qtyH6);

//create price Div
                const priceDiv = document.createElement('div');
                        priceDiv.setAttribute('class', 'item-color col-3');
                            const priceH6 = document.createElement('h6');
                            priceH6.textContent = '$'+item.price*item.qty;

                    itemDiv.appendChild(priceDiv);
                    priceDiv.appendChild(priceH6);

//create remove button
          //     const placeHolderDiv = document.createElement('div');
   //                     placeHolderDiv.setAttribute('class', 'item-remove col-2');
                       const removeBut = document.createElement('button');
                        removeBut.setAttribute('class', 'btn btn-link mt-1 mb-1');
                        removeBut.setAttribute('id', item.id);
                        removeBut.setAttribute('color', item.color)
                     removeBut.textContent = 'remove';
////
                    wrapCartItemsRemove.appendChild(removeBut);
               
//********************************************************************************** */

            }
             
            )};
            totalCartPrice(items);
            createTotalCartPriceContent(items);
            var allRemoveButtons = document.querySelector("#right");
allRemoveButtons.addEventListener("click", removeItem, false);

function removeItem(e){
                if (e.target !== e.currentTarget) {
                    var clickedItem = e.target.id;
                    alert("Hello " + clickedItem);
                    retriveExistingLocalStorageData(items);
                    items.forEach((obj)=> {
                            if ((obj.id === clickedItem)&&(obj.color ===e.target.color)) {}
                            else {}
                    })
                    var index = items.indexOf(clickedItem);
                    console.log(index);
                console.log(items);
                }
                e.stopPropagation();
}


         
        








function totalCartPrice(items){
        let totalPrice = 0;
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

function retriveExistingLocalStorageData(items){
        var retrievedData = localStorage.getItem("items");
        var items = JSON.parse(retrievedData);
        return items;
}

function createTotalCartPriceContent(items){
        const devider = document.createElement('hr');
        const itemDiv = document.createElement('div');
        const totalPriceDiv = document.createElement('div');
        const totalH6 = document.createElement('h6');

        itemDiv.setAttribute('class', 'container row');
        totalH6.setAttribute('class', '');
        devider.setAttribute('width', '90%');
        totalPriceDiv.setAttribute('class', 'col-6');

        totalH6.textContent = 'Total price: $'+totalCartPrice(items);
        section.appendChild(devider);
        section.appendChild(itemDiv);
        itemDiv.appendChild(totalPriceDiv);
        totalPriceDiv.appendChild(totalH6);
}


       // var allRemoveButtons = document.querySelectorAll('.btn');
        
            
       // console.log("Found", allRemoveButtons.length, "div which class starts with btn btn-link.");
       // for (var i = 0; i < allButtons.length; i++) {
       //         allButtons[i].addEventListener('click', function() {
       //           console.clear();
       //           console.log("You clicked:", this.innerHTML);
       //         });
      //  }


function createOrderButton(){

}

