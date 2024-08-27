//Product model (blue print)
//Product contain the structure of a pizza object
//Pizza Object -Id, Name, Desc, Price, Rating, Image

class Product{
    constructor(id, name, desc, price, url){
       this.id=id;
       this.name=name;
       this.desc=desc;
       this.price=price;
       this.url=url;
       this.isAddedInCart=false;
    }
}
export default Product;