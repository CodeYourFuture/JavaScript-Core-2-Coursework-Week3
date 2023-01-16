function readingList(books) {
  // Write your code here...
  const readingList = document.querySelector("#reading-list");

  books.forEach((book) => {
    const li = document.createElement("li");
    const titleText = document.createElement("p");
    const authorText = document.createElement("p");
    const imageElelment = document.createElement("img");

    titleText.innerText = book.title;
    authorText.innerText = book.author;
    imageElelment.src = book.bookCoverImage;
    li.style.backgroundColor = book.alreadyRead ? "green" : "red";

    li.appendChild(titleText);
    li.appendChild(authorText);
    li.appendChild(imageElelment);
    readingList.appendChild(li);
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
