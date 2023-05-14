const content = document.querySelector("content")

function readingList(books) {
  // Write your code here...
const readingList = document.querySelector("ul")

books.forEach((book) => {
  const bookItem = document.createElement("li")
  

  const bookTitleAndAuthor = `${book.title} by ${book.author} `
  const bookInfo = document.createElement("p")
  const bookImage = document.createElement("img")

if (book.alreadyRead) {
bookItem.classList.add("green")

}else {
  bookItem.classList.add("red");
}



  bookInfo.innerText = bookTitleAndAuthor;
  bookImage.src = book.bookCoverImage
  bookImage.classList.add("img")

  bookItem.append(bookTitleAndAuthor, bookImage);
  readingList.append(bookItem)
});
    content.appendChild(readingList);

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
