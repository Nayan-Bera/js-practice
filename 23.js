console.log(" counter function using closures that increments")


function creatcounter()
{
    let count=0
    
    return function(){
        return ++count;
    }
}

let counter= creatcounter();


console.log(counter())
console.log(counter())
console.log(counter())


///    in this avbobe code the closures is working in funtion in the funtion method 
//     when we call the counter() the inner function     """return function(){
 //                                                           return ++count;""""

//     this function call the main count =0 and when this function call its 
///    increment but the main count value remain 0
//     we can use it multiple time with out change the intial value