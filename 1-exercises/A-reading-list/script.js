function readingList(books) {
  let content = document.querySelector('#content');
  let listOfBooks = document.createElement('ul');
  content.appendChild(listOfBooks);
  books.forEach((book) => {
    let list = document.createElement('li');
    let paragraph = document.createElement('p');
    let img = document.createElement('img');
    listOfBooks.appendChild(list);
    list.appendChild(paragraph);
    list.appendChild(img);
    paragraph.innerText = `${book.title} by ${book.author}`
    img.src = book.bookCoverImage;
    if (book.alreadyRead === true) {
      list.style.backgroundColor = 'green';
    } else {
      list.style.backgroundColor = 'red';
    }
    img.style.cssText = "width:150px ; height:220px ; margin-top:10px ";
  })

  
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