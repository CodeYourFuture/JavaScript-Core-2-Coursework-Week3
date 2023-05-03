function readingList(books) {
  for (let book of books) {
    let divEl = document.getElementById("content");
    let pEl = document.createElement("p");
    divEl.appendChild(pEl);

    let ulEl = document.createElement("ul");
    pEl.appendChild(ulEl);

    let liEl = document.createElement("li");
    ulEl.appendChild(liEl);
    liEl.innerHTML = `${book.title} by ${book.author}.`;

    let imageEl = document.createElement("img");
    imageEl.src = book.bookCoverImage;
    imageEl.style.height = "10rem";
    ulEl.appendChild(imageEl);

    if (book.alreadyRead) {
      pEl.className += "read-book";
    } else {
      pEl.className += "unread-book";
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
