function readingList(books) {
  const list = document.querySelector("#reading-list");
  books.forEach((book) => {
    const listItem = document.createElement("li");

    if (book.alreadyRead) {
      listItem.classList = "bookHasAlreadyRead";
    } else {
      listItem.classList = "bookHasNotAlreadyRead";
    }

    const newParagraph = document.createElement("p");
    newParagraph.innerText = `${book.title} by ${book.author}.`;

    listItem.appendChild(newParagraph);

    const newImg = document.createElement("img");
    newImg.src = book.bookCoverImage;
    listItem.appendChild(newImg);
    list.appendChild(listItem);
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
