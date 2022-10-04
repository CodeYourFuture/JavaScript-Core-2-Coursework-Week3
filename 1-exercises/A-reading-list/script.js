// Done ✔️

function readingList(books) {
  let contentCOntainer = document.querySelector('#content'); 
  let listOfBooks = document.createElement("ul"); 

  contentCOntainer.appendChild(listOfBooks);

  books.forEach(book => {
    const eachBook = document.createElement("li"); 
    const authorName = document.createElement("p"); 
    const bookImg = document.createElement("img"); 
    listOfBooks.appendChild(eachBook); 
    eachBook.appendChild(authorName); 
    eachBook.appendChild(bookImg); 

    authorName.innerText = `${book.title} by: ${book.author}`; 
    bookImg.src = book.bookCoverImage; 

    if (!book.alreadyRead){
      eachBook.style.backgroundColor = 'red'; 
    } else {
      eachBook.style.backgroundColor = 'green'; 
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