function readingList(books) {
  // * {
  //   outline: 1px dotted red;
  // }

  let bookBlock = document.querySelector("#content");
  let bookUL = document.querySelector("ul");

  for (let book of books) {
    let bookName = document.createElement("p");
    bookName.innerText = `${book.title} by ${book.author}`;

    let bookList = document.createElement("li");
    bookUL.appendChild(bookList);

    let bookImage = document.createElement("img");
    bookImage.src = book.bookCoverImage;
    bookImage.alt = book.title;
    bookList.appendChild(bookName);
    bookList.appendChild(bookImage);

    if (book.alreadyRead) {
      bookList.style.backgroundColor = "green";
    } else {
      bookList.style.backgroundColor = "red";
    }
  }
  bookBlock.appendChild(bookUL);
}
// i have started working
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
