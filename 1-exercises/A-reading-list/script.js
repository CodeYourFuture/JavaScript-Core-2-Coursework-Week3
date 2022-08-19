function readingList(books) {
  // Write your code here...
  const container = document.createElement("div");
  document.body.appendChild(container);

  const bookList = document.createElement("ul");

  container.appendChild(bookList);

  books.forEach(book => {
    
    const listItems = document.createElement("li");
    listItems.style.padding = "10px";
    listItems.style.margin = "10px";
    listItems.style.width = "200px";
    listItems.style.backgroundColor = book.alreadyRead == true ? "green": "red";
    
    const bookElement = document.createElement("p");
    bookElement.style.width = "200px";
    bookElement.innerHTML = book.title;
    bookElement.innerHTML += " by " + book.author;
    
    const image = document.createElement("img");
    image.src = book.bookCoverImage;
    image.style.width = "200px";
    image.style.marginTop = "5px";
    bookElement.appendChild(image);
    
    listItems.appendChild(bookElement);
    bookList.appendChild(listItems);

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