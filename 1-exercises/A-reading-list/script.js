function readingList(books) {
  // creates an unordered list in the content div
  let contentDiv = document.querySelector('#content');
  let bookListContainer = document.createElement('ul');
  contentDiv.appendChild(bookListContainer);
  for (let book of books) {
    // Creates li tags for individual books
    let bookList = document.createElement('li');
    bookListContainer.appendChild(bookList);

    // Conditionally sets the background colour of the book element depending if the book is read
    let readColor;
    if (book.alreadyRead) {
      readColor = '#0f0';
    } else {
      readColor = '#f00';
    }

    // A li tag is created for individual book
    bookList.innerHTML = `${book.title} by ${book.author}`;
    bookList.style.backgroundColor = readColor;
    bookList.style.marginBottom = '1.7rem'; // This is the margin of the book (li) and it's image

    // Book image is created with some stylings
    let bookImg = document.createElement('img');
    bookImg.src = book.bookCoverImage;
    bookImg.style.display = 'block';
    bookImg.style.marginTop = '2rem';
    bookList.appendChild(bookImg);
  }
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
