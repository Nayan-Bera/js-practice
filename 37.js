console.log("Regular expression to validate an email")

const Regex =/^[a-z0-9]+[@]+[a-z]+\.[a-z]{2,}$/
function validate(email){
    return Regex.test(email);

}
const email= "nayan34@gmail.com"
console.log(validate(email))

//using Regexr