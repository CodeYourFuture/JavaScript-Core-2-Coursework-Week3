function readingList(books) {
  let myBook = document.getElementById("content");
  let uList = document.createElement("ul");
  myBook.appendChild(uList);

  
  books.forEach((book) => {
    let myList = document.createElement("li");
    let paragraph = document.createElement("p");
    paragraph.innerText = `${book.title} by ${book.author}`;
    myList.appendChild(paragraph);
    uList.appendChild(myList);
    let bookCover = document.createElement("img");
    bookCover.setAttribute("src", book.bookCoverImage);
    myList.appendChild(bookCover);

    if (book.alreadyRead) {
      // myList.className = "green";
      myList.style.backgroundColor = "green";
    } else {
      // myList.className = "red";
      myList.style.backgroundColor = "red";
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
