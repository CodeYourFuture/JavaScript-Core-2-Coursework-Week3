function readingList(books){
const content = document.getElementById("content");
books.forEach((book) => {
  //create tags
  const pTag = document.createElement("p");
  const imgTag = document.createElement("img");
  const ulTag = document.createElement("ul");
  const liTag = document.createElement("li");

  //create content
  pTag.textContent = `Title: ${book.title}, Author: ${book.author}`;
  pTag.style.backgroundColor = book.alreadyRead ? "green" : "red";
  imgTag.setAttribute("src", book.bookCoverImage);

  //append to content
  liTag.appendChild(pTag);
  liTag.appendChild(imgTag);
  ulTag.appendChild(liTag);
  content.appendChild(ulTag);

})
};

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
