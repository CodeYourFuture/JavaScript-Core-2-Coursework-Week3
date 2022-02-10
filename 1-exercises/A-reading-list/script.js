function readingList(books) {
  let content = document.getElementById("content");
  let ul = document.createElement("ul");
  for (let book of books) {
    let li = document.createElement("li");
    book.alreadyRead ? (li.className = "green") : (li.className = "red");
    let para = document.createElement("p");
    let imgEl = document.createElement("img");
    imgEl.src = book.bookCoverImage;
    imgEl.className = "image-size";
    para.textContent = book.title + " " + book.author;
    li.appendChild(para);
    li.appendChild(imgEl);
    ul.appendChild(li);
  }
  content.appendChild(ul);
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
