let content = document.querySelector('#content')
let listOfBooksUlEl= document.createElement('UL')

function readingList(books) {
  for(let i=0; i<books.length; i++){

    let newParEl = document.createElement('p');
    newParEl.innerHTML=books[i].title + ' by '+ books[i].author;

    let bookCoverEl = document.createElement('img')
    bookCoverEl.src=books[i].bookCoverImage;
    bookCoverEl.width='200'

    let listOfBooksEl= document.createElement('LI')
    if (books[i].alreadyRead){
      listOfBooksEl.className= 'green'
    }
    else{
      listOfBooksEl.className = 'red'
    }

    listOfBooksEl.appendChild(newParEl)
    listOfBooksEl.appendChild(bookCoverEl)
    listOfBooksUlEl.appendChild(listOfBooksEl)
    content.appendChild(listOfBooksUlEl)
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

console.log(readingList(books));