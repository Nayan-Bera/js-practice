// reverseodd("apple")= elppa
//reverseodd("one two foue")= eno owt four
//Reverse words with odd length
function reverseOdd(str){

    function revrsestring(str){
        return str.split('').reverse().join('')
    }

    const words= str.split(' ')

    for(let i=0;i<words.length;i++){
        if(words[i].length % 2 !== 0 ){

            words[i]= revrsestring(words[i])

        }
    }

    return words.join(' ')
}

console.log(reverseOdd('one two four'))