function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  let ul = document.createElement("ul");
  content.appendChild(ul);
  books.forEach((book) => {
    let paragraph = document.createElement("p");
    let image = document.createElement("img");
    let li = document.createElement("li");
    paragraph.innerText = `Book Title: ${book.title}, Book Author; ${book.author} `;
    image.src = book.bookCoverImage;
    ul.appendChild(li).appendChild(paragraph);
    li.appendChild(image);
    if (book.alreadyRead) {
      li.className = "readthebook";
    } else {
      li.className = "notReadTheBook";
    }
  });
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
