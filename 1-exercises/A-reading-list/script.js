// Render the list of books on the page. Each book should have a title, author and image and a background colour that is set dependent on whether we have read the book or not.

// ## Exercise

function readingList(books) {
  let ul = document.createElement("ul");

  let content = document.querySelector("#content");

  //Iterate through the list of books.
  books.forEach((book) => {
    console.log(book);

    //For each book, create a `<p>` element with the book title and author.
    let p = document.createElement("p");
    p.innerText = `${book.title} by ${book.author}`;

    //Add an `<img>` to each book that links to a URL of the book cover.
    let img = document.createElement("img");
    img.src = `${book.bookCoverImage}`;

    //Use a `<ul>` and `<li>` to display the books and append it to the page.
    let li = document.createElement("li");

    // - Change the style of the book depending on whether you have read it (green) or not (red). Hint: try adding some CSS classes to styles.css for these styles.
    if (book.alreadyRead) {
      li.className = "read";
    } else {
      li.className = "not-read";
    }

    // - All of your HTML should go inside the `<div>` with the id **"content"**.

    li.appendChild(p);
    li.appendChild(img);
    ul.appendChild(li);
  });
  content.appendChild(ul);
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
