function readingList(books) {
  // Write your code here...

const readingList = document.querySelector('#reading-list')

books.forEach((book) => {

  const li = document.createElement("li");

  const titleP = document.createElement('p');
  const authorP = document.createElement('p');
  const imgElement = document.createElement('img')

  titleP.innerText = book.title;
authorP.innerText = book.author;
imgElement.src = book.bookCoverImage;

  li.appendChild(titleP);
  li.appendChild(authorP);
  li.appendChild(imgElement);

if (book.alreadyRead === true) {
  li.style.backgroundColor = 'Green'
} else {
  li.style.backgroundColor = 'Red'
}

  readingList.appendChild(li)
  
})

}


// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);

// function logBooks() {
//   for(let book of books) {
//     if (book.alreadyRead === true) {
//       console.log(`You've already read ${book.title} by ${book.author}`)
//     } else {
//       console.log(`You still need to read ${book.title} by ${book.author}`)
//     }
//   }
// }

// const addTextBtn = document.querySelector('#addArticleBtn');

// addTextBtn.addEventListener('click', () => {
//   const text = document.querySelector("#addArticleInput").value;

//   const pElement = document.createElement('p');
//   pElement.innerText = text;

//   const parent = document.querySelector('#addArticle');
//   parent.appendChild(pElement);
// });
