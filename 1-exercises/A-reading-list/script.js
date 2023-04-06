function readingList(books) {
  books.forEach((book) => {
    const pElement = document.createElement("p"); // creating paragraph
    pElement.innerText = `${book.title} by ${book.author}`; // spitting out title and author
    const imgElement = document.createElement("img"); // creating img
    imgElement.src = `${book.bookCoverImage}`; // spitting out image

    const bookElement = document.querySelector("#reading-list"); // selecting the ul

    const bookListElement = document.createElement("li"); // creating list item
    bookListElement.appendChild(pElement); //printing paragraph to list item
    bookListElement.appendChild(imgElement); // printing image to list item

    bookElement.appendChild(bookListElement);

    if (book.alreadyRead === true) {
      bookListElement.classList.add("red");
    } else {
      bookListElement.classList.add("green");
    }
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
