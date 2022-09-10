function readingList(books) {
  // Write your code here...
  const contentElement = document.getElementById("#content");
  const ulElement = document.createElement("ul");

  books.forEach((book) => {
    const pElement = document.createElement("p");
    const liElement = document.createElement("li");
    const imgElement = document.createElement("img");

    pElement.appendChild(
      document.createTextNode(`"${book.title}" by ${book.author}`)
    );
    liElement.appendChild(pElement);
    imgElement.setAttribute("src", book.bookCoverImage);
    liElement.appendChild(imgElement);
    ulElement.appendChild(liElement);

    if (book.alreadyRead) liElement.className = "green";
    else liElement.className = "red";

    content.appendChild(ulElement);
  });
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
