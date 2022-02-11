function readingList(books) {
  // - For each book, create a `<p>` element with the book title and author.
  const content = document.querySelector("#content");
  const ulList = document.createElement("ul");
  
  books.forEach((book) => {

    const listItem = document.createElement("li");
    
    const paragraph = document.createElement("p");
    paragraph.innerText = `${book.title} : ${book.author}`;
    listItem.appendChild(paragraph);

    const image = document.createElement("img");
    image.src = book.bookCoverImage;
    listItem.appendChild(image)

    if(book.alreadyRead){
       listItem.className = "green";
      // listItem.style.backgroundColor = "green";
    } else {
      listItem.className = "red";
      //listItem.style.backgroundColor = "red";
    }
    ulList.appendChild(listItem);
  });

  content.appendChild(ulList);
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
