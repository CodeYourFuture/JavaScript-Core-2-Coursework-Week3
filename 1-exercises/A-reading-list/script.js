function readingList(books) {
      let mainDiv = document.querySelector("#content");
      let bookUnorderedList = document.querySelector("#reading-list");

      for (const book of books) {
        let bookListItem = document.createElement("li");

        bookListItem.classList.add("book-list-item");
        if (book.alreadyRead) {
          bookListItem.classList.add("green");
        } else {
          bookListItem.classList.add("red");
        }
        let bookTitlePara = document.createElement("p");
        bookTitlePara.innerText = `${book.title} by ${book.author} `;
        bookListItem.appendChild(bookTitlePara);
        let bookImage = document.createElement("img");
        bookImage.classList.add("book-image");
        bookImage.src = book.bookCoverImage;
        bookListItem.appendChild(bookImage);
        bookUnorderedList.appendChild(bookListItem);
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
