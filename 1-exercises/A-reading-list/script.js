function readingList(books) {
  // select the content div
  const content = document.getElementById("content");
  books.forEach((book) => {
    //creating elements
    const container = document.createElement("ul");
    const elem = document.createElement("li");
    const title = document.createElement("p");
    const image = document.createElement("img");
    // adding style and value
    image.style.width = "160px";
    image.setAttribute("src", book.bookCoverImage);
    title.textContent = `${book.title} by ${book.author}`;
    elem.style.backgroundColor = book.alreadyRead ? "green" : "red";
    // add elements to each li
    elem.appendChild(title);
    elem.appendChild(image);
    // add list items to ul
    container.appendChild(elem);
    // add ul containing items to content div
    content.appendChild(container);
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
