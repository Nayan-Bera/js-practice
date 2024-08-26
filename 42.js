const Person ={
name:"zyne",
age:24,
    
introduce:function(){
        return `Hi myname is ${this.name} and my age is ${this.age}`
    }
}

const student = Object.create(Person)
student.studentId = '12234'

console.log(student.name)
console.log(student.studentId)
console.log(student.introduce())