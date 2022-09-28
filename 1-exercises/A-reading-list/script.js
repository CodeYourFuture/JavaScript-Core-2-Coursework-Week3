  function readingList(books) {
  let content = document.querySelector("#content");
   let unorderedList = document.createElement("ul");
   content.appendChild(unorderedList);
   books.forEach(book => {
   let list = document.createElement("li");
   unorderedList.appendChild(list);
   let para = document.createElement("p");
   para.innerHTML = `${book.title}: ${book.author}`;
   list.appendChild(para);
   let img = document.createElement("img");
   img.src = book.bookCoverImage;
   list.appendChild(img);
   if (book.alreadyRead === false) {
   list.style.backgroundColor = "red";
    } else {
    list.style.backgroundColor = "green";
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