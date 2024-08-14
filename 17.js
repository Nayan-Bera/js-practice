console.log("Find the largest element using reduce()")
let arr=[10,45,23,46,87,5,78]

function largest(arr)
{
    return arr.reduce((max,current)=>
        current>max ? current:max)
}

console.log(largest(arr))