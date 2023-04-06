function readingList(books) {
  //   - For each book, create a `<p>` element with the book title and author.
  for (const book of books) {
    const pElement = document.createElement("p");

    // we want to assign something inside the p
    pElement.innerText = `${book.title} by ${book.author}`;

    //   - Add an `<img>` to each book that links to a URL of the book cover.
    const bookImage = document.createElement("img");
    bookImage.src = `${book.bookCoverImage}`;

    //   - Use a `<ul>` and `<li>` to display the books and append it to the page.
    const bookList = document.querySelector("#reading-list");
    const bookListItem = document.createElement("li");

    bookList.appendChild(bookListItem);

    // Appending the pElement and the image to each <li>
    bookListItem.appendChild(pElement).appendChild(bookImage);

    //   - Change the style of the book depending on whether you have read it (green) or not (red). Hint: try adding some CSS classes to styles.css for these styles.

    // ***How can we change the colours of each list item?
    // This works, why does it work - ask Michael!
    if (book.alreadyRead === false) {
      bookListItem.classList.add("red");
    } else {
      bookListItem.classList.add("green");
    }
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
