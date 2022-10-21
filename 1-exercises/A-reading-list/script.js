function readingList(books) {
  // Write your code here...
  //- Iterate through the list of books.
  // For each book, create a `<p>` element with the book title and author.
  // Add an `<img>` to each book that links to a URL of the book cover.
  // Use a `<ul>` and `<li>` to display the books and append it to the page.
  // Change the style of the book depending on whether you have read it (green) or not (red). Hint: try adding some CSS classes to styles.css for these styles.
  // All of your HTML should go inside the `<div>` with the id **"content"**.

  // Solution using forEach

  // let content = document.querySelector("#content");
  // let ul = document.createElement("ul");
  // content.appendChild(ul);
  // books.forEach((book) => {
  //   let li = document.createElement("li");
  //   let p = document.createElement("p");
  //   let img = document.createElement("img");
  //   p.innerText = `${book.title} - ${book.author}`;
  //   img.src = book.bookCoverImage;
  //   li.appendChild(p);
  //   li.appendChild(img);
  //   ul.appendChild(li);
  //   if (book.alreadyRead) {
  //     li.style.backgroundColor = "green";
  //   } else {
  //     li.style.backgroundColor = "red";
  //   }

  // Solution using For loop
  
  const content = document.querySelector("#content");
  const ul = document.createElement("ul");
  content.appendChild(ul);  
  // using for loop to iterate through the array
  for (let i = 0; i < books.length; i++) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const img = document.createElement("img");
    p.innerText = `${books[i].title} - ${books[i].author}`;
    img.src = books[i].bookCoverImage;
    li.appendChild(p);
    li.appendChild(img);
    ul.appendChild(li);
    if (books[i].alreadyRead) {
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red";
    }
  };

  // Bonus: create a button on each book's display to remove the book from the list.

  const btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });
  ul.appendChild(btn);

  // Bonus: change the style of the book depending on whether you have read it (green) or not (red).

  // Hint: try adding some CSS classes to styles.css for these styles.
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
