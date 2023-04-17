function readingList(books) {
  let contentElm = document.querySelector("#content");
  let unorderedList = document.querySelector("#reading-list");

  for (let book of books) {
    let listItem = document.createElement("li");

   listItem.classList.add("li-item");
    if(book.alreadyRead) {
      listItem.classList.add("green");
    }else{
      listItem.classList.add("red")
    }
  let paraElm = document.createElement("p");
      paraElm.innerText = `${book.title} by ${book.author} `;

      listItem.appendChild(paraElm);
      let imageElm = document.createElement("img");
        imageElm.src = book.bookCoverImage;
        listItem.appendChild(imageElm);
        unorderedList.appendChild(listItem);
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

let result = readingList(books);

readingList(books);
