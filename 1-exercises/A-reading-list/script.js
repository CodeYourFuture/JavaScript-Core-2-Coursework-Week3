function readingList(books) {
  // Write your code here...
  let contentDiv = document.getElementById("content");
  let list = document.createElement("ul");
  contentDiv.appendChild(list);

  books.map((book) => {
    // Creating elements
    let listItem = document.createElement("li");
    let titleAndAuthorP = document.createElement("p");
    let image = document.createElement("img");

    // Adding elements content
    titleAndAuthorP.innerText = `${book.title} by ${book.author}`;
    image.src = book.bookCoverImage;
    image.className = "image";
    listItem.classList.add("list-item");

    // Appending elements
    list.appendChild(listItem);
    listItem.appendChild(titleAndAuthorP);
    listItem.appendChild(image);

    // Changing the style of the book depending on whether you have read it (green) or not (red)
    book.alreadyRead
      ? listItem.classList.add("bg--red")
      : listItem.classList.add("bg--green");
  });
  //End of code
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