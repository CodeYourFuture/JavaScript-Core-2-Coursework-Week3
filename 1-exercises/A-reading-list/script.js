function readingList(books) {
  // Write your code here...
  let contentEl = document.getElementById("content");
  let unorderedListEl = document.createElement("ul");
  contentEl.appendChild(unorderedListEl);
  // let redColour = document.querySelector(".red");
  // redColour.className = "red";
  // let greenColour = document.querySelector(".green");
  // greenColour.className = "green";

  for (let i = 0; i < books.length; i++) {
    let pEl = document.createElement("p");
    // contentEl.appendChild(pEl);
    pEl.innerText = `${books[i].title} by ${books[i].author}`;
    let bookCoverEl = document.createElement("img");
    bookCoverEl.src = books[i].bookCoverImage;
    pEl.appendChild(bookCoverEl);

    let listEl = document.createElement("li");
    listEl.appendChild(pEl, bookCoverEl);
    unorderedListEl.appendChild(listEl);
    if (books[i].alreadyRead) {
      listEl.style.backgroundColor = "green";
    } else {
      listEl.style.backgroundColor = "red";
    }
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
