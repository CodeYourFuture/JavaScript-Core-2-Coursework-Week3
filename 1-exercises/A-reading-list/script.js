function readingList(books) {
  // Write your code here...
  let contentEl = document.getElementById("content");
  let unorderedListEl = document.createElement("ul");
  contentEl.appendChild(unorderedListEl);

  for (let i = 0; i < books.length; i++) {
    let listEl = document.createElement("li");
    let pEl = document.createElement("p");
    pEl.innerText = `${books[i].title} by ${books[i].author}`;
    let bookCoverEl = document.createElement("img");
    bookCoverEl.src = books[i].bookCoverImage;
    listEl.appendChild(pEl);
    pEl.parentNode.appendChild(bookCoverEl);
    unorderedListEl.appendChild(listEl);
    if (books[i].alreadyRead) {
      listEl.className += " green";
    } else {
      listEl.className += " red";
    }

    listEl.className += " myStyling";
    bookCoverEl.className += " imageStyling";
    // if (books[i].alreadyRead) {
    //   listEl.style.backgroundColor = "green";
    // } else {
    //   listEl.style.backgroundColor = "red";
    // } // this changes styles directly but according to syllabus its better
    //to assign classnames *Separation of concerns.
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
