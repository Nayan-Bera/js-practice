console.log('Destructure an object')
const person={
    fname:'jhon',
    lname:'mich',
    city:'los',
    age:35
}

console.log(person)
const {fname,lname,...left}= person
console.log(fname)
console.log(lname)
console.log(left)