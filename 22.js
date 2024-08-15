console.log(" recursive function finds the nth Fibonacci number")
function recursivefibo(n){
    if(n<=1){
        return n
    }
    else{
        return recursivefibo(n-1)+recursivefibo(n-2)
    }

}  

console.log(recursivefibo(10))