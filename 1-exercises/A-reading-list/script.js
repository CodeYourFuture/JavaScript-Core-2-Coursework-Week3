function readingList(books) {
  // Write your code here...
  //1.selected element with id ="reading-list"
  let list = document.querySelector("#reading-list");
  let newDiv = document.querySelector("#content");

  //2.Iterate through the list of books
  books.forEach((book) => {
    //create list items
    let listItem = document.createElement("li");

    //Change the style of the book depending on whether you have read it (green) or not (red). Hint: try adding some CSS classes to styles.css for these styles.
    if (book.alreadyRead) {
      listItem.className = "bookHasBeenRead";
    } else {
      listItem.className = "bookHasNotBeenRead";
    }

    //3.For each book, create a `<p>` element with the book title and author.
    const newParagraph = document.createElement("p");
    newParagraph.innerText = `${book.title}-${book.author}`;
    //4 add it to the page = stick a new child on the list

    list.appendChild(listItem);
    listItem.appendChild(newParagraph);
    //Add an `<img>` to each book that links to a URL of the book cover.
    //createImageBitmap,manipulate,add for img

    let newImg = document.createElement("img");
    newImg.src = book.bookCoverImage;
    listItem.appendChild(newImg);

    console.log(newDiv);
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
