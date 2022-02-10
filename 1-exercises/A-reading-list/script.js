function readingList(books) {
  // Write your code here...
  let content = document.getElementById("content");//can also do the same with querySelector("#content")
  let ulElement = document.createElement("ul");
  content.appendChild(ulElement);
  ulElement.className = "product";

  books.forEach( (book)=> {
    let bookTitleEl = document.createElement("p");//For each book, create a `<p>` element with the book title and author.
    bookTitleEl.innerHtml = `${book.title}  ${book.author}`;
    let imageElement = document.createElement("img");//Add an `<img>` to each book that links to a URL of the book cover.
    imageElement.setAttribute("src", book.bookCoverImage); //add src attribute 
    imageElement.setAttribute("alt", "book cover2");//add alt attribute
    let liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    liElement.appendChild(bookTitleEl);

    if(book.alreadyRead === true) {
      liElement.style.backgroundColor = "green"
    }else{
      liElement.style.backgroundColor = "red"
    }

    
    

    

    // let title_author = document.createElement("p");
    // let imageElement = document.createElement("img");//Add an `<img>` to each book that links to a URL of the book cover.
    // let liElement = document.createElement("li");
    // ulElement.appendChild(liElement);// Use a `<ul>` and `<li>` to display the books and append it to the page.
    // liElement.className = "card-book";

    // title_author.innerText =`${book.title}  ${book.author}`;
    // // bookImage.setAttribute("src", book.bookCoverImage);
    // bookImage.setAttribute("src", book.bookCoverImage);
    // liElement.appendChild(title_author);
    // liElement.appendChild(bookImage);

  });
 return content;
  
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780465050659.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bookCoverImage:
      'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780135957059.jpg',
  },
];

readingList(books);