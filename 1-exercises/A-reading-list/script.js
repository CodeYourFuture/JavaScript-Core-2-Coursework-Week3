function readingList(books) {
  let content = document.getElementById("content");
  let listEl =document.createElement("ul")
  content.appendChild(listEl)
  books.forEach((book) => {
    let newList = document.createElement("li");
    let titleAndAuthor =document.createElement("p");
    titleAndAuthor.innerText = book.title + book.author;
    newList.appendChild(titleAndAuthor);
    let imgOfBooks = document.createElement("img")
    imgOfBooks.src =book.bookCoverImage
   newList.appendChild(imgOfBooks);
    //  newList.style.backgroundColor = book.alreadyRead ? "green" : "red";
     if (book.alreadyRead) {
      newList.className +=" green";
    } else {
      newList.className +=" red";
    }
  listEl.appendChild(newList);
  
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
