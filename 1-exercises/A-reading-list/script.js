function readingList(books) {
  let content = document.getElementById("content");

  books.forEach((book) => {
    var div = document.createElement("div");

    let titleBook = document.createElement("p");
    titleBook.innerHTML = `${book.title} - ${book.author}`;

    let img = document.createElement("img");
    img.src = book.bookCoverImage;

    content.appendChild(div);
    div.appendChild(titleBook);
    div.appendChild(img);

    if (book.alreadyRead === true) {
      div.style.backgroundColor = "green";
    } else {
      div.style.backgroundColor = "red";
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
