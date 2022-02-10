function readingList(books) {
  const ourUnorderedList = document.createElement("ul");
  books.forEach((book) => {
    const ourListItem = document.createElement("li");

    const ourParagraph = document.createElement("p");
    ourParagraph.innerText = book.title + " by " + book.author;
    ourListItem.appendChild(ourParagraph);

    const ourImage = document.createElement("img");
    ourImage.src = book.bookCoverImage;
    ourListItem.appendChild(ourImage);

    let color = "red";
    if (book.alreadyRead) {
      color = "green";
    }
    ourListItem.style.backgroundColor = color;
    ourUnorderedList.appendChild(ourListItem);
  });
  const whereToAttach = document.querySelector("#content");
  whereToAttach.appendChild(ourUnorderedList);
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
