function readingList(books) {
  // Write your code here...
  let getContent = document.querySelector("#content");
  let ulElement = document.createElement("ul");
  getContent.appendChild(ulElement);

  for (const book of books) {
    let liElement = document.createElement("li");
    ulElement.appendChild(liElement);

    let pElement = document.createElement("p");
    pElement.innerText = `${book.title} by ${book.author}`;
    liElement.appendChild(pElement);

    let imgElement = document.createElement("img");
    imgElement.src = book.bookCoverImage;
    liElement.appendChild(imgElement);

    if (books.alreadyRead === true) {
      liElement.style.backgroundColor = "green";
    } else {
      liElement.style.backgroundColor = "red";

    }
    
  }

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