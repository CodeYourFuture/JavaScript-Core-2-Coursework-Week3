

function readingList(books) {
  
   for(let i = 0; i < books.length; i++) {

     
    let paraElement = document.createElement('p')
    let imgTag = document.createElement('img')


    //variable to change colour of background based on wether the book has been read or not passed into paraelement
    styleBackgroundRedOrBlue = books[i].alreadyRead ? "red" : "green";

    paraElement.innerText =  `${books[i].title} by ${books[i].author}`
    imgTag.src =  books[i].bookCoverImage;
    paraElement.style.background = styleBackgroundRedOrBlue;
   


     let myDiv = document.querySelector('#content')
     myDiv.appendChild(paraElement)
     myDiv.appendChild(imgTag)
     
  
    
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