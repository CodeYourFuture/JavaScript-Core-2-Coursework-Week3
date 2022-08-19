function readingList(books) {
  // Write your code here...
  const array = ["readingList, books"]
  array.forEach(function (readingList, books) {
    console.log(array);
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

for (var i = 0; i < books.length; i++) {
  var bookP = document.createElement("p");
  var bookDescription = document.createTextNode(books[i].title + " by " + books[i].author);
  console.log(bookDescription);
};

var bookList = document.createElement("ul");
for (var i = 0; i < books.length; i++) {
  var bookItem = document.createElement("li");
  var bookItem = document.createElement("img");
  bookImg.src = books[i].img;
  bookItem.appendChild(bookImg);
  var bookDescription = document.createTextNode(books[i].title + " by " + books[i].author);
  bookItem.appendChild(bookDescription);
  if (books[i].readAlready) {
    bookItem.style.color = "green";
      }  else {
      (books[i].notYetRead) 
    bookItem.style.color = "red";
              
    }
  
    };
  
  
  
console.log(bookDescription);
