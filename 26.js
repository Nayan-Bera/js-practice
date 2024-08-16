console.log("makes multiple API calls using callbacks")

///api call function
function APIcall(url,callback){

    fetch(url)     //fetch the url
    .then(Response=> Response.json()) //then response
    .then(data=> callback(data) )    ///then store the data with callback data
    .catch(err=> console.log('Erron during apicall:',err.massge))
}

//handel the data callback function

function handeldata(data){
    console.log("prossed data",data)
}

// this the main function where the is call the api call funtion

function main(){

    const apiurl1 ="https://jsonplaceholder.typicode.com/posts/1"

    const apiurl2 ="https://jsonplaceholder.typicode.com/posts/2"

//APIcall(url,handeldata)
//APIcall(url,handeldata)



APIcall(apiurl1,handeldata)
APIcall(apiurl2,handeldata)


}

main();


/*    APIcall(apiurl1,handeldata)  

                  |      |
                  v      v

function APIcall(url,callback)

*/