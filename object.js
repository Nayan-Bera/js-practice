let car={
    name:"toyota",
    model:"supra",
    year:2022
}

car.startengine= function(){
    console.log("start engine")
}
console.log(car.startengine()) //functioncall
console.log(car.startengine) //using key
console.log(car) //see object and method