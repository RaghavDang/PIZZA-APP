//Product crud operation
//Containing the logic for Fetching, Adding,
//Sorting, Searching,
//Deleting, Updating
/*
It talk to network layer to bring the JSON ,
 and convert JSON into vice-cersa
 */
import Product from "../models/product.js";
import doNetworkCall from "./api-client.js";

const productOperations={
    products:[],
    search(pizzaId){
        const product=this.products.find(currentProduct=>currentProduct.id==pizzaId);
        console.log('Product Found ',product);
        product.isAddedInCart=true;
        console.log('Array ',this.products);
    },
    getProductsInCart(){
       const productInBasket=this.products.filter(product=>product.isAddedInCart);
       return productInBasket;
    },
    async loadProducts(){
       const pizzas= await doNetworkCall();
       const pizzasArray=pizzas['Vegetarian'];
       const productsArray=pizzasArray.map(pizza=>{
        const currentPizza=new Product(pizza.id, pizza.name, pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url);
        return currentPizza;
       })
       console.log('Product Array',productsArray);
       this.products=productsArray;
       return productsArray;
    },
    sortProducts(){

    }
}

export default productOperations;