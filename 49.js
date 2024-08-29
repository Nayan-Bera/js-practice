console.log("returns the number of days in the month")

function isleapyear(year){
    return (year% 4 == 0 && year % 100 !==0 || year %400 ==0)
}




function days(month, year){
if(month ==2){
    return isleapyear(year)? 29 :28
}
else if([4,6,9,11].includes(month)){
    return 30
}
else{
    return 31
}
}


console.log(days(4, 2018))