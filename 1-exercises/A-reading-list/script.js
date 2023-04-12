function readingList(books) {
  let liElement = document.createElement("li");
  let pElement = document.createElement("p");

  let bookInfo = books[0].title + " by " + books[0].author;
  pElement.textContent = bookInfo;

  liElement.appendChild(pElement);

  let imgElement = document.createElement("img");
  let bookImageUrl = books[0].bookCoverImage;

  imgElement.src = bookImageUrl;
  // Write your code here...
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
