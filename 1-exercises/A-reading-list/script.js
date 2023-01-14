function readingList() {
  // - Change the style of the book depending on whether you have read it (green) or not (red).
  // Hint: try adding some CSS classes to styles.css for these styles.
  const myNewList = document.querySelector("#reading-list"); //going inside of ul list
  for (let book of books) {
    // const goInsideDiv = document.querySelector("#content"); //place to make changes(div)

    const newList = document.createElement("li"); //creating a list
    const myNewP = document.createElement("p"); //added text of the paragraph
    const addImg = document.createElement("img"); // create img

    myNewP.innerText = book.title + " by " + book.author; //added text of the paragraph
    addImg.src = book.bookCoverImage; //img src
    if (book.alreadyRead) {
      newList.style.background = "green";
    } else {
      newList.classList.add("red");
    }

    newList.appendChild(myNewP); //added text of the paragraph
    newList.appendChild(addImg); //img
    myNewList.appendChild(newList); //adding li to ul
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
