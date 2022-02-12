function readingList(books) {
  // Write your code here...
  let newUl = document.createElement("ul");
  document.getElementById("content").append(newUl);
  for (let book of books) {
    let newParagraph = document.createElement("p");
    newParagraph.innerText = `${book.title} by ${book.author}`;
    let newImg = document.createElement("img");
    newImg.src = `${book.bookCoverImage}`;
    let newLi = document.createElement("li");
    book.alreadyRead
      ? newLi.classList.add("green")
      : newLi.classList.add("red");
    newLi.append(newParagraph, newImg);
    newUl.append(newLi);
  }
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
