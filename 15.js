console.log("returns a new array of even numbers")
let arr=[1,3,4,5,6,18,15,16]

function filterevennum(arr){
return arr.filter(num => num%2==0)

}
console.log(filterevennum(arr))


//filter is a higher oder function to filter data