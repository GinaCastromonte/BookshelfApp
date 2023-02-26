// testing out to see if I created a class correctly : 
let aBook = new Book("The Cat in the Hat", "Dr. Seuss", "Children's Book", "English"); 

let bBook = new Book("Charlotte's Web", "E.B White", "Children's Book", "English");


let cBook = new Book("The Little Prince", "Antoine de Saint-Exupéry","Children's Book", "Fiction", "French");

/// add the new books to the list that already exists 
let bShelf = new BookList()
 bShelf.addBook(aBook);
 bShelf.addBook(bBook);
 bShelf.addBook(cBook);

 bShelf.render()

 let addButton = document.querySelector("#add")
 addButton.addEventListener('click', () =>{
    let title = document.getElementById("title").value 
    let author = document.getElementById("author").value 
    let subject = document.getElementById("subject").value
    let language = document.getElementById("language").value 

    let newBook = new Book(title,author,subject,language)
    bShelf.addBook(newBook)

let commButton = document.querySelector('comment')
commButton.addEventListener('click',()=>{
    let comment = document.getElementById('comment').value
    if( )

}
)
}

 })
