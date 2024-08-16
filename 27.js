console.log("makes multiple API calls  using Promises ")

///api call function
function APIcall(url){

   return fetch(url)     //fetch the url
    .then(Response=> Response.json()) //then response
   
    
}

//handel the data  

function handeldata(data){
    console.log("prossed data",data)
}

// this the main function where the is call the api call funtion

function main(){

    const apiurl1 ="https://jsonplaceholder.typicode.com/posts/1"

    const apiurl2 ="https://jsonplaceholder.typicode.com/posts/2"




APIcall(apiurl1).then(handeldata).catch(err=> console.log('error'))
APIcall(apiurl2).then(handeldata).catch(err=> console.log('error'))


}

main();


//we call promesis with  then