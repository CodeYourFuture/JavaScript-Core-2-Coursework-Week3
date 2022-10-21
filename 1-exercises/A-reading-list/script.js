function readingList(books) {
  // Write your code here...
  let divEl = document.querySelector("#content");
  let unorderListEl = document.createElement("ul");
  divEl.appendChild(unorderListEl);
  books.forEach(book => {
    let listEl =document.createElement("li");
    unorderListEl.appendChild(listEl);

    let paragraphEl = document.createElement("p");
    paragraphEl.className="scriptPara";
    paragraphEl.innerHTML=`${book.title} : ${book.author}`;
    listEl.appendChild(paragraphEl);

    let imageEl=document.createElement("img");
    imageEl.className="scriptImg";
    imageEl.src=book.bookCoverImage;
    listEl.appendChild(imageEl);

    if(book.alreadyRead===false){
      listEl.style.backgroundColor="red";
    }else {
      listEl.style.backgroundColor="green";
    }
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