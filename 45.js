//takes an array of objects and return the total price
const grocery =[{
    product:'milk',
    quantity:1,
    price:2.30
},{
    product:'cereal',
    quantity:1,
    price:3.60
}]



function getTotalPrice(groceries){
let total =0
for(const item of groceries){
    console.log(item)
    const itemPrice =item.quantity*item.price

total+=itemPrice    
}
return total
}



console.log(getTotalPrice(grocery))

