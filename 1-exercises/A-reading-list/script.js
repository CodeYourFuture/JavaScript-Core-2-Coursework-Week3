function readingList(books) {
  // Write your code here...
  

const content = document.getElementById("content");
const ul = document.createElement("ul");

for (const book of books){
  const li = document.createElement("li");
  li.className = book.alreadyRead ? "read" : "not-read";
  const p = document.createElement("p");
  p.textContent = `${book.title} by ${book.author}`;
  li.appendChild(p);
  const img = document.createElement("img");
  img.src = book.bookCoverImage;
  li.appendChild(img);
  ul.appendChild(li);
}

content.appendChild(ul);
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