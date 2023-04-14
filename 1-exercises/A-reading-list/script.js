function readingList(books) {
  let list = document.querySelector("#reading-list");
  document.body.appendChild(list);

  for (const book of books) {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `${book.title} by ${book.author}`;
    let img = document.createElement("img");
    img.src = book.bookCoverImage;
    let listInside = document.createElement("li");
    list.appendChild(listInside);

    listInside.appendChild(paragraph);
    listInside.appendChild(img);

    list.appendChild(listInside);
    if (book.alreadyRead === true) {
      listInside.style.backgroundColor = "green";
    } else {
      listInside.style.backgroundColor = "red";
    }
  }
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
