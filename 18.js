console.log("Remove all occurrences of a specific element")
let arr=[23,5,1,66,74,23,45,23,6]
let target=23
function removeelement(arr,target){
    return arr.filter(item=>item!==target)
}

let remove= removeelement(arr,target)

console.log(remove)