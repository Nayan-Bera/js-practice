class Book{
    constructor(title, author,year){
this.title =title
this.author = author
this.year= year
    }
    getage(){
       const currentyear = new Date().getFullYear();
       return currentyear  - this.year
    }
}
const book1 = new Book("read it","jhon walker",2000)

console.log(book1.title)
console.log(book1.year)


const ageofbook=book1.getage();
console.log(ageofbook)