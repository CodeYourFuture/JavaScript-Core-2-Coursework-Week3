function readingList(books) {
  // Write your code here...
  const content = document.querySelector("#content");
  const list = document.createElement("ul");
  list.className = "book-list";
  
  books.forEach((book) => {
    const listItem = document.createElement("li");
    const bookInfo = document.createElement("p");
    bookInfo.innerText = `${book.title} by ${book.author}`;
    listItem.appendChild(bookInfo);
    
    const bookCover = document.createElement("img");
    bookCover.src = book.bookCoverImage;
    bookCover.alt = `${book.title} book cover`;
    listItem.appendChild(bookCover);
    
    if (book.alreadyRead) {
      listItem.className = "read";
    } else {
      listItem.className = "unread";
    }
    
    list.appendChild(listItem);
  });
  
  content.appendChild(list);
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
