function readingList(books) {
  // Write your code here...
  let content = document.querySelector('#content');
  //console.log(content);
  let unorderedList = document.createElement("ul");
  //console.log(unorderedList);
  let bookList = books.map(book => {
    //book.alreadyRead = true ? book.style.backgroundColor = "green" : book.style.backgroundColor = "red";
    return(`<li><p>${book.title} by ${book.author}</p><img src= ${book.bookCoverImage}></li>`);
  }).join("");
  //content.style.backgroundColor = "red"; it worked
 //console.log(bookList);
 content.append(unorderedList);
 unorderedList.innerHTML = bookList;
//  let cssClass = bookList.filter(value =>{
//     if (!(value.alreadyRead) ? value.setAttribute('class', 'not read') : value.setAttribute('class', 'read'));
//   });

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