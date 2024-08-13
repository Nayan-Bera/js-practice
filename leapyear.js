
function isleapyear(year){
    if(year %4  == 0  && year % 100 !== 0 || year % 400 == 0)
        return "leapyear"
    else
    return "not leapyear"
}

console.log(isleapyear(2014))