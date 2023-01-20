function readingList(books) {
  for (let book of books) {
    let listItem = document.createElement("li") // Creates list item (<li> tag)
    let existingList = document.querySelector("#reading-list")
    existingList.appendChild(listItem)
    // listItem.class = "red" // That's what I could think of; it didn't work
    // listItem.classList.add("red") // How on earth should I think of that? [ https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element ]

    book.alreadyRead ? listItem.classList.add("readBook") : listItem.classList.add("unreadBook")

    let titleAuthor = document.createElement("p"); // This & next line create <p> element and
    titleAuthor.innerText = `${book.title} by ${book.author}`; // 'feed' it with text (content)
    listItem.appendChild(titleAuthor) // The <p> element and its content is appended to the list item

    let cover = document.createElement("img");
    cover.src = book.bookCoverImage // Adds src attribute to the <img> tag
    // cover.setAttribute("width", "200");
    // cover.width = "200"
    // cover.width vs cover.setAttribute("width") PROs & CONs ?
    // Although the above commented code (either line 17 or line 18) made the page
    // look more like the reading-list.png, I had to commented it out so that it
    // passes the tests
    listItem.appendChild(cover)
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
