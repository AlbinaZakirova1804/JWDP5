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
wrapContainerDiv.setAttribute('class', 'container mt-5 row');
wrapCartItemsInfo.setAttribute('class', 'col-10');
wrapCartItemsInfo.setAttribute('id', 'left');
wrapCartItemsRemove.setAttribute('class', 'remove container col-2');
wrapCartItemsRemove.setAttribute('id', 'right');

//add content
cartHeadding.textContent = 'Welcome to your cart!';

//build layout
section.appendChild(cartHeadding);
section.appendChild(wrapContainerDiv);
wrapContainerDiv.appendChild(wrapCartItemsInfo);
wrapContainerDiv.appendChild(wrapCartItemsRemove);

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
                //preset layout
                var indexInArray = items.indexOf(item);
                const itemDiv = document.createElement('div');
                itemDiv.setAttribute('class', 'container row mt-3');
                itemDiv.setAttribute('id', 'div-'+indexInArray);
                //build layout
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
                const removeBut = document.createElement('button');
                removeBut.setAttribute('class', 'btn btn-link mt-1 mb-1');
                removeBut.setAttribute('id', indexInArray );
                removeBut.textContent = 'remove';
                wrapCartItemsRemove.appendChild(removeBut);
        })
            totalCartPrice(items);
            createTotalCartPriceContent(items);
            //validation, if cart empty we can't process it
            createOrderButton();
        };
            
/**********************listening for all****"remove" buttons click**************************/
var allRemoveButtons = document.querySelector("#right");
allRemoveButtons.addEventListener("click", removeItem, false);

function removeItem(e){
        if (e.target !== e.currentTarget) {
                var clickedButtonIndex = e.target.id;
                // alert("Item with id " + e.target.id + "was removed");
                retriveExistingLocalStorageData(items);
                deleteObjFromLocalStorage(items, clickedButtonIndex);
                /************************************************************/
                var elementDiv = document.getElementById(`div-${clickedButtonIndex}`);
                var elementBtn = document.getElementById(`${clickedButtonIndex}`);
                    
                        elementDiv.remove();
                        elementBtn.remove();

                        totalCartPrice(items);
                        updateCartPrice(items);
                        
                /*********************************************************/
                }
        e.stopPropagation();
}

function deleteObjFromLocalStorage(items, objIndex) {
        var removed = items.splice(objIndex, 1);
        pushDataToLocalStorage(items);
}

function totalCartPrice(items){
        let totalPrice = 0;
        retriveExistingLocalStorageData(items);
        items.forEach((item)=>{
        totalPrice += item.price*item.qty 
        return totalPrice;
        });
        return totalPrice;
}

 function retriveExistingLocalStorageData(items){
        var retrievedData = localStorage.getItem("items");
        var items = JSON.parse(retrievedData);
        return items;
}

function pushDataToLocalStorage(items){
        localStorage.setItem( 'items', JSON.stringify(items) );
}

function createTotalCartPriceContent(items){
        const devider = document.createElement('hr');
        const itemDiv = document.createElement('div');
        const totalPriceDiv = document.createElement('div');
        const totalH6 = document.createElement('h6');

        itemDiv.setAttribute('class', 'container row');
        itemDiv.setAttribute('id', 'price sum wrap container');
        totalH6.setAttribute('id', 'sum');

        devider.setAttribute('width', '90%');
        totalPriceDiv.setAttribute('class', 'col-6 text-left');
        totalPriceDiv.setAttribute('id', 'sum-price-container');

        totalH6.textContent = 'Total price: $'+totalCartPrice(items);
        section.appendChild(devider);
        section.appendChild(itemDiv);
        itemDiv.appendChild(totalPriceDiv);
        totalPriceDiv.appendChild(totalH6);
}


//update total cart price after removing items out of cart
function updateCartPrice(items){
        var div = document.getElementById('sum-price-container');
        var h6 = document.getElementById('sum');
        h6.remove(); //remove the old
        const newTotalPrice = document.createElement('h6'); //create the new
        newTotalPrice.setAttribute('id', 'sum');
        newTotalPrice.textContent = 'Total price: $'+totalCartPrice(items);
        div.appendChild(newTotalPrice);
//input validation on empty car order
        if (totalCartPrice(items) === 0){
                document.getElementById('order-button-div').remove();//remove order button for empty cart
                
        //clean local storage
        localStorage.clear();
        }
}

function createOrderButton(){
        //get element on web page
        let itemDiv =document.getElementById('price sum wrap container')
        console.log(itemDiv);
        // create new container div 
        let orderDiv = document.createElement('div');
        orderDiv.setAttribute('class', 'col-6 text-right');
        orderDiv.setAttribute('id', 'order-button-div');

        // create button
        let orderButton = document.createElement('a');
        orderButton.setAttribute('class', 'btn btn-success');
        orderButton.setAttribute('id', 'order button');
        orderButton.setAttribute('type', 'submit');
        orderButton.setAttribute('href', 'order.html');

        //add text to the button
        orderButton.textContent = "Prosess your order";

        //build content
        itemDiv.appendChild(orderDiv);
        orderDiv.appendChild(orderButton);
} 

//export { totalCartPrice };
//export {retriveExistingLocalStorageData};