function readingList() {
  // Write your code here...

  const newBookInfo = document.querySelector("#reading-list");

  for (let eachBook of books) {
    const liElement = document.createElement("li");

    const bookTitleAndAuthor = document.createElement("p");
    bookTitleAndAuthor.innerText = `${eachBook.title} by ${eachBook.author}`;
    liElement.appendChild(bookTitleAndAuthor);

    const bookImage = document.createElement("img");
    bookImage.src = eachBook.bookCoverImage;
    liElement.appendChild(bookImage);

    if (eachBook.alreadyRead === true) {
      liElement.style.backgroundColor = "green";
    } else {
      liElement.style.backgroundColor = "red";
    }

    newBookInfo.appendChild(liElement);
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
