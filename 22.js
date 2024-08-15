console.log(" recursive function finds the nth Fibonacci number")
function recursivefact(n){
    if(n===1){
        return 1
    }
    else{
        return n*(recursivefact(n-1))
    }

}  

console.log(recursivefact(5))