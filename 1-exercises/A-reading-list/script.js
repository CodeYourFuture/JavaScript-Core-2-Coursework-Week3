function readingList(books) {
  const readingList = document.querySelector("#reading-list");
  books.forEach((book) => {
    const li = document.createElement("li");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const bookCover = document.createElement("img");

    readingList.appendChild(li);
    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(bookCover);

    title.textContent = book.title;
    author.textContent = book.author;
    bookCover.src = book.bookCoverImage;
    li.style.backgroundColor = book.alreadyRead ? "green" : "red";
  });
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
