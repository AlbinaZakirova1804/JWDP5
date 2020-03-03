

//select elements on html
const main = document.querySelector('main');
const section = document.querySelector('section');


//get all json objects
async function getData() 
       {try
            {
            let requestURL = 'http://localhost:3000/api/teddies';
            //await the response of the fetch call
           let response = await fetch(requestURL);
            //proceed once the first promise is resolved.
           let data = await response.json()
            //proceed only when the second promise is resolved
            return data;
        } catch(e)
        {
            //if it fails, catch an error      
           console.error(e)
        }finally
        {
            console.log('There was an error loading data.Please make sure the server is on.');
        }
    }
//call getData function
getData()
.then(teddies => showProduct(teddies));//show the data
/*
//get json objects
let requestURL = 'http://localhost:3000/api/teddies';
fetch(requestURL)
.then(res => res.json())// response type
.then(teddies =>showProduct(teddies));
*/
//get json
/*let requestURL = 'http://localhost:3000/api/teddies';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json'; 
request.send();

request.onload = function() { 
    const teddies = request.response; 
    console.log(teddies);
showProduct(teddies); } */

//Creating new Elements
function showProduct(jsonObj) {
const products = jsonObj;
for (let i = 0; i < products.length; i++) {
const newA = document.createElement('a');
const newDiv = document.createElement('div');
const newH5 = document.createElement('h5');
const newP = document.createElement('p');
const newImg = document.createElement('img');

newImg.src = products[i].imageUrl;

//set attributes
section.setAttribute('class', 'row mx-2 my-5');
newImg.setAttribute('class','img-responsive rounded w-100');
newImg.setAttribute('alt',"teddy bear"+i);
newImg.setAttribute('id', products[i]._id);
newA.setAttribute('href', `./teddy.html`+'?'+'_id='+`${products[i]._id}`);
newDiv.setAttribute('class', 'card col-6 col-sm-4 col-lg-3');

//set content
newH5.textContent = products[i].name;
newP.textContent ='$'+ products[i].price/100;

//built page
section.appendChild(newDiv);
newDiv.appendChild(newA);

newA.appendChild(newImg);
//newDiv.appendChild(newImg);
newDiv.appendChild(newH5);
newDiv.appendChild(newP);
};

}