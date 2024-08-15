console.log(" recursive function find factorial")
function recursivefact(n){
    if(n===1){
        return 1
    }
    else{
        return n*(recursivefact(n-1))
    }

}  

console.log(recursivefact(5))