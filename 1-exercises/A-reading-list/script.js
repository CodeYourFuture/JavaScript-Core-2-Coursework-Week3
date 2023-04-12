function readingList(books) {
  if (!books || !Array.isArray(books) || books.length === 0) {
    console.log("Invalid or empty 'books' array.");
    return;
  }

  for (const book of books) {
    let liElement = document.createElement("li");
    let pElement = document.createElement("p");

    let bookInfo = book.title + " by " + book.author;
    pElement.textContent = bookInfo;

    if (book.alreadyRead === true) {
      liElement.classList.add("green");
    } else {
      liElement.classList.add("red");
    }

    if (book.bookCoverImage) {
      let imgElement = document.createElement("img");
      imgElement.src = book.bookCoverImage;
      liElement.appendChild(imgElement);
    }

    liElement.appendChild(pElement);

    let ulElement = document.querySelector("#reading-list");
    ulElement.appendChild(liElement);
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
