function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  let unorderedList = document.querySelector("ul");

  content.appendChild(unorderedList);

  for (let book of books) {
    const list = document.createElement("li");
    unorderedList.appendChild(list);

    let titleAndAuthor = document.createElement("p");
    titleAndAuthor.innerHTML = `${book.title} by ${book.author}`;
    list.appendChild(titleAndAuthor);

    let bookImg = document.createElement("img");
    bookImg.src = book.bookCoverImage;
    list.appendChild(bookImg);
    list.style.backgroundColor = book.alreadyRead ? "green" : "red";
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
