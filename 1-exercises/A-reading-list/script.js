function readingList(books) {
  const ul = document.querySelector("#reading-list")
  books.forEach(element => {
  const bookContainer = document.createElement("li")
const bookTitle = document.createElement("p")
  bookTitle.innerText = element.title
  const bookImage = document.createElement("img")
  bookImage.src = element.bookCoverImage
  bookContainer.append(bookTitle, bookImage)
  
  ul.append(bookContainer)
  });
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
