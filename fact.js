function factorial(num){
if(num==0||num==1)
    
   return 1;
else {
let fact =1;
   // for(i=num;i>=1;i--)
   for(i=1;i<=num;i++)
fact*=i

    return fact;
}}


console.log(factorial(6))