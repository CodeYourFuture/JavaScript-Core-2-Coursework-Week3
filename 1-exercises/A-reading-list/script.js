function readingList(books) {
  let content = document.getElementById("content");
  let ulElement = document.createElement("ul");
  content.appendChild(ulElement);
  ulElement.className = "product";

  books.forEach((book) => {
    let title_author = document.createElement("p");
    let bookImage = document.createElement("img");
    let liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    liElement.className = "card-book";

    title_author.innerText = book.title + " " + book.author;
    bookImage.setAttribute("src", book.bookCoverImage);
    liElement.appendChild(title_author);
    liElement.appendChild(bookImage);
  });
  return content;
}

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
