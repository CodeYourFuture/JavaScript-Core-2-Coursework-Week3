function readingList(books) {
  array.forEach(element => {
    const bookList = document.createElement('li');
    const bookTitles = document.createElement('h1');
    const bookAuthor = document.createElement('h2');
    const images = document.createElement('img');


    bookTitles.innerText = element.title;
    bookAuthor.innerText = element.author;
    images.src= element.bookCoverImage;
    if (element.alreadyRead) {
      bookList.style.backgroundColor= "green";
    } else{
      bookList.style.backgroundColor= "red";
    }

    document.querySelector("#reading-list").appendChild(bookList);
    bookList.appendChild(bookTitles);
    bookList.appendChild(bookAuthor);
    bookList.appendChild(images)

    
  });
    
  // Write your code here...
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
