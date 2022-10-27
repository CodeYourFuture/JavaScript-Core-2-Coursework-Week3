function readingList(books) {
  // Write your code here...
  let contentElement = document.querySelector('#content'); // this is the overall div element

  let booksList = document.createElement('ul');     // creating an unordered list
  contentElement.appendChild(booksList)             // appending the unordered list to the div element
  let addingABook = document.querySelector('ul');   // selecting the unordered list

  for (let i = 0; i < books.length; i++) {
    let bookItem = document.createElement('li');    // creating a list item
    addingABook.appendChild(bookItem);              // appending list item to unordered list

    if (books[i].alreadyRead) {
      bookItem.style.backgroundColor = "green";
    }
    else {
      bookItem.style.backgroundColor = "red";
    }

    let paragraph = document.createElement('p');    // creating a paragraph element
    paragraph.innerText = `${books[i].title} by ${books[i].author}`;  // setting paragraph text
    bookItem.appendChild(paragraph);                // appending paragraph to list item

    let image = document.createElement('img');      // creating an image element
    image.src = books[i].bookCoverImage;            // setting image source url
    bookItem.appendChild(image);              // appending image to list item

    
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