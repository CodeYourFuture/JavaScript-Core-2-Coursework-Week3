function readingList(books) {
  const readingList = document.createElement(`ul`);

  books.forEach((book) => {
    const bookItem = document.createElement(`li`);

    if (book.alreadyRead) bookItem.classList.add(`book-list-item__is-read`);
    else bookItem.classList.add(`book-list-item__not-read`);

    const bookInfo = document.createElement(`p`);
    const bookImage = document.createElement(`img`);

    const bookInfoText = `${book.title} by ${book.author}`;

    bookInfo.innerText = bookInfoText;
    bookImage.src = book.bookCoverImage;
    bookImage.classList.add(`book-image-cover`);

    bookItem.append(bookInfo, bookImage);
    readingList.appendChild(bookItem);
  });

  content.appendChild(readingList);
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
