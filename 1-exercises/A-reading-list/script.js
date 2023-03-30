function readingList(books) {
  // Write your code here...
  const result = document.getElementById("reading-list");
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    const newLi = document.createElement("li");
    const addParag = document.createElement("p");
    addParag.textContent = `${book.title} by ${book.author}`;
    const addImg = document.createElement("img");
    addImg.src = book.bookCoverImage;
    newLi.appendChild(addParag);
    newLi.appendChild(addImg);
    if (book.alreadyRead) {
      newLi.style.backgroundColor = "green";
    } else {
      newLi.style.backgroundColor = "red";
    }

    result.appendChild(newLi);
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
