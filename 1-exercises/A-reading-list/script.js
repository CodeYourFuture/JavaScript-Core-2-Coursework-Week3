function readingList(books) {
let divEl =document.getElementById("content");
books.forEach((book) => {
 let pEl = document.createElement("p");
 let liEl  = document.createElement("li");
 let imgEl  = document.createElement("img");
 
    pEl.appendChild(
      document.createTextNode(`"${book.title}" by ${book.author}`)
    );
    liEl.appendChild(pEl);
    imgEl.setAttribute("src", book.bookCoverImage);
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl); 

        if (book.alreadyRead) liEl.className = "green";
    else liEl.className = "red";
    content.appendChild(ulEl);
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