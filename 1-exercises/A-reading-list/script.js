function readingList(books) {
  // Get the 'content' div
  const content = document.getElementById("content");

  // Create a 'ul' element
  const list = document.createElement("ul");

  // Iterate through the books array
  books.forEach((book) => {
    // Create a 'li' element
    const item = document.createElement("li");

    // Create a 'p' element 
    const bookInfo = document.createElement("p");
    // input book title and author in the 'p' element
    bookInfo.innerHTML = `${book.title} by ${book.author}`;

    // Create an 'img' element with the book cover image
    const bookCover = document.createElement("img");
    // add 'src' attribute value to 'bookCover' 
    bookCover.src = book.bookCoverImage;

    // Append the bookInfo (title and author) and bookCover to the 'li' element
    item.appendChild(bookInfo);
    item.appendChild(bookCover);

    // Add a class to the 'li' element depending on whether the book has been read
    if (book.alreadyRead) {
      item.classList.add("read");
    } else {
      item.classList.add("not-read");
    }

    // Append the 'li' element to the 'ul' element
    list.appendChild(item);
  });

  // Append the 'ul' element to the 'content' div
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
