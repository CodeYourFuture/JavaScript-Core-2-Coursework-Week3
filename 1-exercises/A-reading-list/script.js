function readingList(books) {
  // Write your code here...
  let div = document.querySelector("#content");
  let ul = document.createElement("ul");
  content.appendChild(ul);
  for (const book of books) {
    // let ul = document.querySelector("ul");
    let li = document.createElement("li");
    ul.appendChild(li);
    let text = document.createElement("p");
    text.innerHTML = `${book.title} by ${book.author}`;
    li.appendChild(text);
    let image = document.createElement("img");
    image.src = book.bookCoverImage;
    li.appendChild(image);
    if (book.alreadyRead === true) {
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red";
    }
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
