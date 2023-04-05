function readingList(booksArray) {
  let booksUlElem = document.querySelector('ul#reading-list');
  for(let book of booksArray){
    let bookElem = document.createElement('li');
    bookElem.classList.add(book.alreadyRead ? 'green' : 'red');
    let bookTitle = document.createElement('p');
    bookTitle.innerText = `${book.title} by ${book.author}`;
    let bookImg  = document.createElement('img');
    bookImg.src = book.bookCoverImage;
    // bookImg.width = '300';
    bookElem.appendChild(bookTitle);
    bookElem.appendChild(bookImg);
    booksUlElem.appendChild(bookElem)
  };

}

// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);
