//Return "Boom!" where there is 7 on array

function sevenboom(arr){
for(const num of arr){
    if(num.toString().includes("7")){
        return "Boom!!!!"
    }
   
}
return "No seven Is there"
}
console.log(sevenboom([1,2,4,6,8,0,8,4,8]))