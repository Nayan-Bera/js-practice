const rows =3
const columns=4
function creatmultidimentionalsarray(rows, columns){
let arr=[]

for(let i=0; i<rows;i++){
    let row=[]
    //arr.push(new Array(columns))
    for(let j=0;j<columns;j++){
       // arr[i][j]= i+j;
        row.push(i+j)
    }
    arr.push(row)
}
return arr

}
function display(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i].join(" "))
    }
}

function reversedisplay(arr){
    for(let i=arr.length-1;i>=0;i--){
        console.log(arr[i].reverse().join(" "))
    }
}

const multiarray= creatmultidimentionalsarray(rows,columns)

console.log("original array");
display(multiarray)

console.log("Reverse Array")
reversedisplay(multiarray)