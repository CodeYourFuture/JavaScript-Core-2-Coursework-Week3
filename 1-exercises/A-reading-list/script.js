function readingList(books) {
  // Write your code here...
  let elementList = document.getElementById(`reading-list`);

  books.forEach((book) => {
    let pElement = document.createElement(`p`);
    pElement.innerText = `${book.title} by ${book.author}`;

    let imgElement = document.createElement(`img`);
    imgElement.src = `${book.bookCoverImage}`;

    let newList = document.createElement(`li`);

    elementList.appendChild(newList);

    newList.appendChild(pElement) && newList.appendChild(imgElement);

    if (book.alreadyRead === true) {
      newList.classList.add(`green`);
    } else {
      newList.classList.add(`red`);
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
