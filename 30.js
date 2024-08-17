console.log("Fetch data from an API and handle errors")

async function fetchdata(url){
try{
    let response =await fetch(url)
    if(!response.ok){
        throw new("requese failed status:"+response.status)
    }
    return await(response.json())
}
catch(error){

    console.error("error fething data:",error)
}

}
fetchdata("https://jsonplaceholder.typicode.com/posts").then(data=> console.log(data))