//Oddish or Evenish
//evenodd(227)= 2+2+7 =11 //oddish
//evenodd(121)= 1+2+1 =4 //evenish


function evenishoddish(num){

    const digit = num.toString().split('').map(Number);

    //console.log(digit)
    const sum = digit.reduce((acc,digit)=>acc+digit,0)

    return sum%2 == 0? "evenish" : "Oddish"
  
}



console.log(evenishoddish(121))