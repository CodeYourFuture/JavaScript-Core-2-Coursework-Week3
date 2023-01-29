function readingList(books) {
  // Write your code here...
  for (let book of books) {
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookCover = document.createElement("img");
    const booksList = document.createElement("li");
    bookTitle.innerText = book.title;
    bookAuthor.innerText = book.author;
    bookCover.src = book.bookCoverImage;
    booksList.appendChild(bookTitle);
    booksList.appendChild(bookAuthor);
    booksList.appendChild(bookCover);
    if (book.alreadyRead === true) {
      booksList.style.backgroundColor = "green";
    } else {
      booksList.style.backgroundColor = "red";
    }
    document.querySelector("#reading-list").appendChild(booksList);
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
