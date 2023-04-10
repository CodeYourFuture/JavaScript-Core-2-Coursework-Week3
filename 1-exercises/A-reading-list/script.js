function readingList(books) {
  for (i = 0; i <= books.length; i++) {
    let liElement = document.createElement("li");
    let pElement = document.createElement("p");
    let bookInfo = books[i].title + " by " + books[i].author;
    pElement.textContent = bookInfo; // textContent only targets the text portion but leave any HTML alone, but if you go after html it will completely ruin HTML that you had before.
    if (books[i].alreadyRead === true) {
      liElement.classList.add("green");
    } else {
      liElement.classList.add("red");
    }
    liElement.appendChild(pElement);
    let imgElement = document.createElement("img");
    let bookImageUrl = books[i].bookCoverImage;
    imgElement.src = bookImageUrl;
    liElement.appendChild(imgElement);
    let ulElement = document.querySelector("#reading-list");
    ulElement.appendChild(liElement);
    let divElement = document.querySelector("#content");
    divElement.appendChild(ulElement);
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
