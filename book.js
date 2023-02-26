class Book {
  /*
        state all class values and make sure I had syntax right, I've had trouble creating classes 
    */
  constructor(title, author, subject, language) {
    this.title = title;
    this.author = author;
    this.subject = subject;
    this.language = language;
  }
  /*
    want to render the book properties 
    */
  render() {
    let eachBook = document.createElement("section");
    eachBook.classList.add("eachBook");

    let title = document.createElement("h2");
    title.innerText = `Title:${this.title} `;

    let author = document.createElement("h3");
    author.innerText = `Author:${this.author}`;

    let subject = document.createElement("h3");
    subject.innerText = `Subject:${this.subject}`;

    let language = document.createElement("h3");
    language.innerText = `Language: ${this.language}`;

    eachBook.append(title);
    eachBook.append(author);
    eachBook.append(subject);
    eachBook.append(language);

    
  }
}


