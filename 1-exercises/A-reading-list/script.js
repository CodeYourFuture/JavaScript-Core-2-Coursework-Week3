function readingList(books) {
  // Write your code here...
  const contentDiv = document.querySelector("#content");
  const ulTag = document.createElement("ul");
  contentDiv.appendChild(ulTag);
  books.forEach((book) => {
    const liItem = document.createElement("li");
    const paragraph = document.createElement("p");
    paragraph.innerText = `${book.title} by ${book.author}`;
    ulTag.appendChild(liItem);
    liItem.appendChild(paragraph);

    const image = document.createElement("img");
    image.src = `${book.bookCoverImage}`;
    liItem.appendChild(image);

    if (book.alreadyRead) liItem.style.backgroundColor = "green";
    else liItem.style.backgroundColor = "red";
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
