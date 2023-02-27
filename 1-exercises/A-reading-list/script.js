
function readingList(books) {
  let content = document.getElementById("content");
  let listEl = document.createElement("ul")
  content.appendChild(listEl)
  books.forEach((book) => {
    let newList = document.createElement("li");
    newList.className = "container";
    let titleBook = document.createElement("p");
    titleBook.innerText =` ${book.title} \n ${book.author}`;
    titleBook.className = "title";
    newList.appendChild(titleBook);
    let imgOfBooks = document.createElement("img")
    imgOfBooks.className = "picture"
    imgOfBooks.src = book.bookCoverImage
    newList.appendChild(imgOfBooks);
    if (book.alreadyRead === true) {
      newList.className = "grenn";
    } else {
      newList.className = "red";
    }
  listEl.appendChild(newList);

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
