function readingList(books) {
  books.forEach((book, index) => {
    let { title, author, alreadyRead, bookCoverImage } = book;
    // create p tag
    const p = document.createElement("p");
    // Append content to p
    p.appendChild(document.createTextNode(`${title} by ${author}`));
    // Create li tag
    const li = document.createElement("li");
    li.style.backgroundColor = alreadyRead ? "green" : "red";
    // Add p to the li
    li.appendChild(p);
    // Create img tag
    const img = document.createElement("img");
    //Assign src property to img
    img.src = bookCoverImage;
    // Add img to li
    li.appendChild(img);
    const readingList = document.querySelector("#reading-list");
    readingList.appendChild(li);
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