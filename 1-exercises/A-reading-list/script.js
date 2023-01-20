function readingList(books) {
  books.forEach(book => {

    const createPTag = document.createElement("p");
    createPTag.innerText = `${book.title} by ${book.author}`;

    const createImgTag = document.createElement("img");
    createImgTag.src = book.bookCoverImage;

    const createLiTag = document.createElement("li");
    createLiTag.appendChild(createPTag);
    createLiTag.appendChild(createImgTag);

    createLiTag.style.backgroundColor = book.alreadyRead ? "green" : "red";
    const ulParent = document.querySelector("ul");
    ulParent.appendChild(createLiTag);
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
