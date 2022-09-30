function readingList(books) {
  let divContent = document.querySelector("#content");
  let ulOfBooks = document.createElement("ul");
  divContent.appendChild(ulOfBooks);
  // ulOfBooks.id = "listOfBooks";
  // divContent.appendChild("#listOfBooks");


  books.forEach(book => {
    let liOfBook = document.createElement("li");
    let pTitleAuthor = document.createElement("p");
    let imgOfBook = document.createElement("img");
    ulOfBooks.appendChild(liOfBook);
    liOfBook.appendChild(pTitleAuthor);
    liOfBook.appendChild(imgOfBook);
    pTitleAuthor.innerText = `${book.title} by ${book.author}`;
    imgOfBook.src = book.bookCoverImage;

    if (book.alreadyRead) {
      liOfBook.style.backgroundColor = "green";
    } else {
      liOfBook.style.backgroundColor = "red";
    }
   
  });
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780465050659.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bookCoverImage:
      'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780135957059.jpg',
  },
];

readingList(books);

// - Iterate through the list of books.
// - For each book, create a `<p>` element with the book title and author.
// - Add an `<img>` to each book that links to a URL of the book cover.
// - Use a `<ul>` and `<li>` to display the books and append it to the page.
// - Change the style of the book depending on whether you have read it (green) or not (red). Hint: try adding some CSS classes to styles.css for these styles.
// - All of your HTML should go inside the `<div>` with the id **"content"**.