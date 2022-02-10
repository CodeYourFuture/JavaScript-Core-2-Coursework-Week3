function readingList(books) {
  let ulEl = document.createElement("ulEl");
  ulEl.setAttribute("id", "proList");
  let content = document.querySelector("#content");

  for (book of books) {
    let liEl = document.createElement("liEl");
    liEl.setAttribute("class", "item");
    ulEl.appendChild(liEl);
    liEl.innerHTML = `
      <p>${book.title} by ${book.author}</p>
      <img class=image src= "${book.bookCoverImage}" >`;
  }
  content.appendChild(ulEl);
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
