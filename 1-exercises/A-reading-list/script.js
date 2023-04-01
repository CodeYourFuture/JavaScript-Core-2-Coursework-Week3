function readingList(books) {
  // Write your code here...

  for (let book of books) {
    const paragraph = document.createElement("p");
    // let content = document.querySelector("#content");
    // content.appendChild(paragraph);
    paragraph.innerText = `${book.title} by ${book.author}`;

    const li = document.createElement("li");
    let ul = document.querySelector("#reading-list");

    if (book.alreadyRead) {
      li.style.backgroundColor = "red";
    } else {
      li.style.backgroundColor = "green";
    }
    li.appendChild(paragraph);
    ul.appendChild(li);

    let bookImage = document.createElement(`img`);
    bookImage.src = book.bookCoverImage;
    paragraph.appendChild(bookImage);
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
