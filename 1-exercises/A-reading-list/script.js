function readingList(books) {
  // Write your code here..

  let content = document.getElementById("content");
  let bookList = document.createElement("ul");
  content.appendChild(bookList);

  books.forEach((book) => {
    let items = document.createElement("li");
    bookList.appendChild(items);
    let paragraphs = document.createElement("p");
    paragraphs.innerHTML = `${book.title}: ${book.author}`;
    items.appendChild(paragraphs);
    let bookImage = document.createElement("img");
    bookImage.src = book.bookCoverImage;
    items.appendChild(bookImage);
    if (book.alreadyRead === true) {
      items.style.backgroundColor = "green";
    } else {
      items.style.backgroundColor = "red";
    }
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
