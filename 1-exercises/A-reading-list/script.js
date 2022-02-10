function readingList(books) {
  let contentEl = document.querySelector("#content");
  let ulEl = document.createElement("ul");
  ulEl.innerText = "List of books:";
  contentEl.appendChild(ulEl);
  for (let book of books) {
    let liEl = document.createElement("li");
    liEl.style.listStyle = "none";
    contentEl.appendChild(liEl);
    let pEl = document.createElement("p");
    pEl.textContent = `${book.title} -
  ${book.author}`;
    liEl.appendChild(pEl);

    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", book.bookCoverImage);

    if (book.alreadyRead === true) {
      liEl.style.backgroundColor = "green";
    } else {
      liEl.style.backgroundColor = "red";
    }
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);
  }
}

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
