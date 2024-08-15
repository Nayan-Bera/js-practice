console.log("Add method to Product Prototype ")

function product(name,price,quantity){
this.name =name
this.price = price
this.quantity = quantity
}


product.prototype.calculateTotalprice = 
function(){
    return this.price*this.quantity
}

const product1 = new product("phone",4,100)
console.log(product1.calculateTotalprice())
console.log(product.prototype)


console.log(product1)