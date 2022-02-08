const readingList = (books) => {
  // Write your code here...
  const mainDiv = document.querySelector("#content");
  const bookList = document.createElement("ul");

  let bookContent = books.map((book) => {
    book.alreadyRead
      ? (readOrNot = "book-item-not-read")
      : (readOrNot = "book-item-read");

    return `<li class=${readOrNot}>
    <p >${book.title} by ${book.author}</p>
    <a href=${book.bookCoverImage}>
    <img src=${book.bookCoverImage}></img>
    </a>
    </li>
    `;
  }).join("");

  bookList.innerHTML = bookContent;
  mainDiv.append(bookList);
};

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
