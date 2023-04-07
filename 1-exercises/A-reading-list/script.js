function readingList(books) {
  for (const book of books) {
    let pElement = document.createElement("p");
    let bookImgElement = document.createElement("img");
    let listItemElement = document.createElement("li");
    pElement.innerText = `${book.title} by ${book.author}`;
    bookImgElement.src = book.bookCoverImage;
    listItemElement.append(pElement, bookImgElement);
    document.querySelector("#reading-list").appendChild(listItemElement);
    if (book.alreadyRead === true) {
      listItemElement.classList.add("greenBg");
    } else {
      listItemElement.classList.add("redBg");
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
