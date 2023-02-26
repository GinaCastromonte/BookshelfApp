class BookList {
    constructor(){
        this.books = []

    }

    addBook(book){
        this.books.push(book); 
}
// makes each book appear on the shelf
render(){
    let allBooks = this.books.map(book => book.render())
    

 let bookSection = document.querySelector(".booklist ")
 for( let eachBook of allBooks){
    bookSection.append(eachBook)
 

 //append it so it can visibly be seen on the page      
}

return allBooks
} 
} 