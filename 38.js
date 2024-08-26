const rows =3
const columns=4
function creatmultidimentionalsarray(rows, columns){
let arr=[]

for(let i=0; i<rows;i++){
    arr.push(new Array(columns))
    for(let j=0;j<columns;j++){
        arr[i][j]= i+j;
        

    }
}
return arr

}
function display(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i].join(" "))
    }
}

const multiarray= creatmultidimentionalsarray(rows,columns)

console.log("original array");
display(multiarray)