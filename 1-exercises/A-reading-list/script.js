// Iterate through the list of books.
// For each book, create a <p> element with the book title and author.
// Add an <img> to each book that links to a URL of the book cover.
// Use a <ul> and <li> to display the books and append it to the page.
// Change the style of the book depending on whether you have read it (green) or not (red). Hint: try adding some CSS classes to styles.css for these styles.
// All of your HTML should go inside the <div> with the id "content".

function readingList(books) {
  // Write your code here...

  // fetch the book data
  let theContent = document.querySelector("#content");
  //set ip the page
  let ViewList = document.createElement("ul");

  //loop through the elements
  for (let eachBook of books) {
    // Use list <li> to display the books
    let ViewListItem = document.createElement("li");

    // Change the style of the background based on the true / false -  you have read it (green) or not (red).
    if (eachBook.alreadyRead) ViewListItem.classList.add("greenBackground");
    else ViewListItem.classList.add("redBackground");

    // For each book, create a '<p>' element with the book title and author
    let myNewParagraph = document.createElement("p");
    myNewParagraph.innerText = eachBook.title + " by " + eachBook.author;
    // Add an '<img>' to each book that links to a URL of the book cover
    let bookImg = document.createElement("img");
    bookImg.src = eachBook.bookCoverImage;
    // Ensure that the book covers are all the same size
    bookImg.setAttribute("width", `280`);
    bookImg.setAttribute("height", `400`);
    // align items to the centre of the page?
    // bookImg.setAttribute.setAttribute('align', 'center');
    // remove the dot the li
    // colour the text white

    // Append  book and title elements
    ViewListItem.appendChild(myNewParagraph);
    ViewListItem.appendChild(bookImg);
    // Append to the list
    ViewList.appendChild(ViewListItem);
  }

  //  Append it to the page
  theContent.appendChild(ViewList);
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
