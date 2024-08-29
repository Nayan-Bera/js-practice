console.log("Vowels or consonants")
function constandvowel(str){

    function isConsonent(char){

        const consonents ="bcdfgjklmnpqstvxzhrwy"
       return consonents.includes(char);
    }

    function countconstandvowel(word){
        let consonents = 0
        let vowels= 0

        for(const char of word){
            if(isConsonent(char)){
                consonents++;
            }
            else if("aeiouAEIOU".includes(char)){

            vowels++;

            }
            
        }
        return consonents +" "+ vowels
    }


    const words = str.split(' ')

    console.log(words)

    const consonentcount= words.map(word => countconstandvowel(word))

    return consonentcount;
}



console.log(constandvowel("happy birthdey to me"))