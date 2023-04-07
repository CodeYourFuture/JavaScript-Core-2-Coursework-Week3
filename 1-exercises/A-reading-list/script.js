function readingList(books) {
  books.forEach(book => {
    const pElement = document.createElement("p");
    const img = document.createElement("img");
    const listItem = document.createElement("li");
    const list = document.querySelector("#reading-list");
    pElement.innerText = `${book.title} by ${book.author}`;
    img.src = book.bookCoverImage;
    listItem.appendChild(pElement);
    listItem.appendChild(img);
    const backgroundClass = book.alreadyRead ? "green" : "red";
    listItem.classList.add(backgroundClass);
    list.appendChild(listItem);


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
