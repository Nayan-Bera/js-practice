function texttoNumBinary(str){
const words = str.split(' ').filter(word=>word.toLowerCase()== "zero"|| word.toLowerCase()== "one")


console.log(words)

let binaryString =words.map((word)=>{
    return word.toLowerCase()==="one"? "1" : "0"
}).join('')

const excesslength = binaryString.length % 8;

if(excesslength!==0){
    binaryString= binaryString.slice(0,0)
}
return binaryString


console.log(binaryString)
}

console.log(texttoNumBinary("zero one  zero one zero one zero one"))