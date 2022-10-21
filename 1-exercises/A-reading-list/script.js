function readingList(books) {
 
const parent = document.querySelector("#content")
const ulEls = document.createElement("ul")

 for(let book of books){
    const liEls = document.createElement("li")
    const para = document.createElement("p")
    para.textContent = `${book.title} by ${book.author}`
    liEls.appendChild(para);
 
    ulEls.appendChild(liEls);

    const image = document.createElement("img")
    image.src = book.bookCoverImage;
    liEls.appendChild(image);
  
   if(book.alreadyRead){
      liEls.style.backgroundColor = "green";
    }else{
      liEls.style.backgroundColor = "red";
    }
  }
 parent.appendChild(ulEls);
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