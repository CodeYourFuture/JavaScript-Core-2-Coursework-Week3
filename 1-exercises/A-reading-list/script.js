function readingList(books) {
  let divContent = document.querySelector("#content");
  let ulOfBooks = document.createElement("ul");
  divContent.appendChild(ulOfBooks);

  books.forEach(book => {
    let liOfBook = document.createElement("li");
    let pTitleAuthor = document.createElement("p");
    let imgOfBook = document.createElement("img");
    ulOfBooks.appendChild(liOfBook);
    liOfBook.appendChild(pTitleAuthor);
    liOfBook.appendChild(imgOfBook);
    pTitleAuthor.innerText = `${book.title} by ${book.author}`;
    imgOfBook.src = book.bookCoverImage;

    if (book.alreadyRead) {
      liOfBook.style.backgroundColor = "green";
    } else {
      liOfBook.style.backgroundColor = "red";
    }
  });
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