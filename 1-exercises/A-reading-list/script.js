function readingList(books) {
  // Write your code here...
  let content = document.getElementById("content");
  let uList = document.createElement("ul");
  content.appendChild(uList);

  books.forEach((book) => {
    let list = document.createElement("li");
    let authorAndTitle = document.createElement("p");
    authorAndTitle.innerText = book.title + " \n " + book.author;
    list.appendChild(authorAndTitle);
    let bookImg = document.createElement("img");
    bookImg.src = book.bookCoverImage;
    list.appendChild(bookImg);
    if (book.alreadyRead) {
      list.classList.add("green");
    } else {
      list.classList.add("red");
    }
    uList.appendChild(list);
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
