function readingList(books) {
  // Write your code here...

  const list = document.querySelector("#reading-list");

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const bookItem = document.createElement("li");
    const bookInfo = document.createElement("p");
    const bookCover = document.createElement("img");

    bookInfo.textContent = `${book.title} - ${book.author}`;
    bookCover.src = book.bookCoverImage;

    bookItem.appendChild(bookInfo);
    bookItem.appendChild(bookCover);
    list.appendChild(bookItem);

    if (book.alreadyRead) {
      bookItem.classList.add("read");
    } else {
      bookItem.classList.add("unread");
    }
  }
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
