let content = document.querySelector("#content");
let ul = document.createElement("ul");
content.appendChild(ul);

function readingList(books) {
  books.forEach((book) => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    let img = document.createElement("img");
    p.innerText = `${book.title} by ${book.author}`;
    img.src = book.bookCoverImage;
    li.appendChild(p);
    li.appendChild(img);
    if (book.alreadyRead) {
      li.classList.add("green")
    } else {
      li.classList.add("red")
    }
    ul.appendChild(li);
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
