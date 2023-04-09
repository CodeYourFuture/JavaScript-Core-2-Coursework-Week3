function readingList(books) {
  let contentEl = document.getElementById("content");
  let readingListEl = document.getElementById("reading-list");
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let liEl = document.createElement("li");
    liEl.className = book.alreadyRead ? "read" : "not-read";
    book.alreadyRead ===false?liEl.style.backgroundColor = "red":liEl.style.backgroundColor = "green";
    let pEl = document.createElement("p");
    //liEl.style.backgroundColor ="red";
    pEl.textContent = book.title + "by" + book.author;
    let imgEl = document.createElement("img");
    imgEl.style.width ="200";

    imgEl.src = book.bookCoverImage;
    liEl.appendChild(pEl);
    liEl.appendChild(imgEl);
    readingListEl.appendChild(liEl);
  }
  contentEl.appendChild(readingListEl);
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
