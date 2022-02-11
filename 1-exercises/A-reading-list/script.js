let content = document.querySelector('#content');
function readingList(books) {
  // Write your code here...
  let unorderedList = document.createElement("ul"); // created unordered list tag
  content.append(unorderedList);
    
  //iterate through the list of books
   bookList = books.forEach(book => {
    paraElement = document.createElement("p"); //p element
    paraElement.innerHTML = (`${book.title} by ${book.author}`); // paragraph content
    imageTag = document.createElement("img");
    imageTag.src = book.bookCoverImage;
    
    let listElement = document.createElement("li"); // list
    unorderedList.append(listElement);
    listElement.append(paraElement);
    listElement.append(imageTag);

    //background colours
      if (book.alreadyRead === true){
       listElement.style.backgroundColor = "green";
    } else {
       listElement.style.backgroundColor = "red";
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