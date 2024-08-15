console.log(" try-catch block to handle an error of API fetch")


async function fetchdata(){
try{
    let response= await fetch("https://jsonplaceholder.typicode.com/posts")

    let data = await response.json();
    console.log(data);
}
catch(error){
    console.error("erronr fetching data:"+error)
}
}

fetchdata()