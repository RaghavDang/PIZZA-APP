//Glue b/w View and Model
//Controller - I/O View Launcher
//Data Exchange b/w View and Model.

import productOperations from "../services/product-operations.js";

async function loadPizzas(){
    const pizzas=await productOperations.loadProducts();
    console.log('Pizzas are', pizzas);
    for(let pizza of pizzas){
        preparePizzaCard(pizza);
    }
}
loadPizzas();

/*
<div class="col-4">
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
</div> 
*/
function addToCart(){
    console.log('Add to Cart Called...', this);
    const currenButton=this;
    const pizzaId=currenButton.getAttribute('product-id');
    console.log('Pizza id is ', pizzaId);
    productOperations.search(pizzaId)
    printBasket();
}
function printBasket() {
    const productsInCart = productOperations.getProductsInCart();
    const basket = document.querySelector('#basket');
    let total = 0;
    basket.innerHTML = '';
    for (let product of productsInCart) {
        const li = document.createElement('li');
        li.innerText = `Pizza: ${product.name} - ${product.price}`;
        basket.appendChild(li);
        total += parseFloat(product.price); // Ensure price is treated as a number
    }
    const totalDiv = document.querySelector('#total');
    totalDiv.innerHTML = ''; // Clear previous total
    totalDiv.innerText = `Total: ${total.toFixed(2)}`; // Display total with 2 decimal places
}


function preparePizzaCard(pizza){
    const outputDiv=document.querySelector('#output');
    const colDiv=document.createElement('div');
    colDiv.className='col-4';
    const cardDiv=document.createElement('div');
    cardDiv.className='card';
    cardDiv.style="width: 18rem;";
    colDiv.appendChild(cardDiv);
    const img=document.createElement('img');
    img.src=pizza.url;
    img.className='card-img-top';
    cardDiv.appendChild(img);
    const cardBody=document.createElement('div');
    cardBody.className='card-body';
    cardDiv.appendChild(cardBody);
    const h5=document.createElement('h5');
    h5.className='card-title';
    h5.innerText=pizza.name;
    const pTag=document.createElement('p');
    pTag.className='card-text';
    pTag.innerText=pizza.desc;
    const button=document.createElement('button');
    button.setAttribute('product-id',pizza.id)
    button.addEventListener('click',addToCart); //event bind
    button.innerText='Add to card';
    button.className='btn btn-primary';
    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(button);
    outputDiv.appendChild(colDiv);
}