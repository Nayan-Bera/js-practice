class Book{
    constructor(author, title,year){
        this.title=title
        this.author=author
        this.year=year
    }
}
class Magazine extends Book{
    constructor(author, title,year,issue){
        super(author, title,year)
        this.issue=issue
    }
    getIssuenumber(){
        return this.issue
    }
}

const mymagazine =new Magazine("dxo","zen",2023,8)

//console.log(mymagazine)
console.log(mymagazine.title)
console.log(mymagazine.getIssuenumber())