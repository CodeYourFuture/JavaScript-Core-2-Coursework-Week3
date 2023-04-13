function readingList(books) {
  const content = document.getElementById('content');
  const list = document.createElement('ul');
books.forEach((book) => { 
  const item = document.createElement('li');
  const paragraph = document.createElement('p');
  const title = document.createTextNode (book.title);
  const author = document.createTextNode(`by ${book.author}`);
  const image = document.createElement('img');

 paragraph.appendChild(title);
 paragraph.appendChild(author);
 item.appendChild(paragraph);
 item.appendChild(image);

 image.src = book.bookCoverImage;
 image.alt = book.title;

 if  (book.alreadyRead) {
  item.style.backgroundColor ='green';
 }else {
  item.style.backgroundColor ='red';
 }
list.appendChild(item);
});
content.appendChild(list);
  

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
