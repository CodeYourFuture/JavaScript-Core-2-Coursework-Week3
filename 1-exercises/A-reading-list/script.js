function readingList(books) {
  const newReadingList = document.querySelector("#reading-list");

  books.forEach((book) => {
    const newList = document.createElement("li");
    const titleAndAuthor = document.createElement("p");
    const bookImg = document.createElement("img");

    titleAndAuthor.innerText = book.title.concat(` by ${book.author}`);
    bookImg.src = book.bookCoverImage;

    newList.style.backgroundColor = book.alreadyRead
      ? (newList.style.backgroundColor = "green")
      : (newList.style.backgroundColor = "red");

    newList.appendChild(titleAndAuthor); // .style.fontSize = "25px";
    // titleAndAuthor.classList.add("fontSize");

    newList.appendChild(bookImg); // .style.width = "200px";
    // bookImg.classList = "imageSize";
    newReadingList.appendChild(newList);
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
