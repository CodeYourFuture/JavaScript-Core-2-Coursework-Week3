
function readingList(books) {
  const bookDiv = document.querySelector("#content");
  const listOfBooks = document.querySelector("#reading-list");
  bookDiv.appendChild(listOfBooks);
  for (let book of books){
    let bookTitle = document.createElement("p");
    bookTitle.innerText = `${book.title} by ${book.author}`;

    let bookImg = document.createElement("img");
    bookImg.src = book.bookCoverImage;

    let liElement = document.createElement("li");
    liElement.appendChild(bookTitle);
    liElement.appendChild(bookImg);

    listOfBooks.appendChild(liElement);
    if (book.alreadyRead){
      liElement.style.backgroundColor = "green";
    } else {
      liElement.style.backgroundColor = "red";
    }

  }
bookDiv.appendChild(listOfBooks);

//  Iterate through the list of books.
// + For each book, create a `<p>` element with the book title and author.
// + Add an `<img>` to each book that links to a URL of the book cover.
// + Use a `<ul>` and `<li>` to display the books and append it to the page.
// + Change the style of the book depending on whether you have read it (green) or not (red). Hint: try adding some CSS classes to styles.css for these styles.
// + All of your HTML should go inside the `<div>` with the id **"content"**.

// The end result should look something like this
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
