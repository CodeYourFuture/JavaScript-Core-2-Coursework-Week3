


function readingList(books) { 

  let divContent = document.querySelector("#content");
  let list = document.createElement("ul");
  divContent.appendChild(list);

  books.forEach(book => {
    let listEl = document.createElement("li")
    list.appendChild(listEl)

    let paragraph = document.createElement("p")
    listEl.appendChild(paragraph)
    paragraph.innerText = `${book.title} written by ${book.author}`;

    let image = document.createElement("img");
    listEl.appendChild(image);
    image.src = book.bookCoverImage;

    if( book.alreadyRead === true)  listEl.style.backgroundColor = "green";
    else listEl.style.backgroundColor = "red";
    
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