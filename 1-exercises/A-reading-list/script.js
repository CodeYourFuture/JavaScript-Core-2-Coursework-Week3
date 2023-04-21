

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
  // Add more books here
  {
    title: '1984',
    author: 'George Orwell',
    alreadyRead: true,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9788193545836.jpg',
  },
];

// Above is the variable const books. It has an array of books with objects, as title, we can call.

readingList(books);

function readingList(books) {
  const content = document.getElementById('content');
  const list = document.createElement('ul');

  books.forEach((book) => {
    const item = document.createElement('li');
    const paragraph = document.createElement('p');
    const title = document.createTextNode(book.title);
    const author = document.createTextNode(` by ${book.author}`);
    const image = document.createElement('img');

    paragraph.appendChild(title);
    paragraph.appendChild(author);
    item.appendChild(paragraph);
    item.appendChild(image);

    image.src = book.bookCoverImage;
    image.alt = book.title;

    if (book.alreadyRead) {
      item.style.backgroundColor = 'green';
    } else {
      item.style.backgroundColor = 'red';
    }

    list.appendChild(item);
  });

  content.appendChild(list);
}


// I start with a function readingList and I have specified books as its call argument. Its purpose is to create a list of books
// based on an array of objects passed as an argument. I use two const variables that equal document and the first use .getElementsById
// and with the 'content' we have a reference to an HTML element. Then an unordered list is created in next variable. In the
// books array the function create a list item (li) and (p) a paragraph element. In the third variable, I use a .createTextNode to
// with two nodes - book and title. The next node insert the authors name into the string `by...` and use `${}` syntax.
// Last variable, adds an image. 
// I use .appendChild for all paragraph - title and author - and item to paragraph and image. When the appendChild() method is called,
//  the child node is added to the end of the parent node's child node list. Then I set the image source and alt.
// Next I use an if else statement with the property (book.alreadyRead). If it is true I read the book you see inside the brackets
// it takes the item and style a green background. If it is false there will be a red background. Then the code check the unordered list
// append it to the item. And content.appendChild append the unordered list to the content.
// Finished.


