function readingList(books) {
  // Write your code here...
  let parentElement = document.querySelector("#content");
  let newList = document.createElement("ul");
  let bookText = "";
  let className = ""; 
  for (let book of books) {
      if (book.alreadyRead) {
        className = "book-item-not-read";
      } else {
        className = "book-item-read";
      }
      bookText = bookText.concat(`<li class =${className}> <p>${book.title} by ${book.author}</p> <a href=${book.bookCoverImage}><img src=${book.bookCoverImage}></img>
      </a> </li>`); 
    }
 

   newList.innerHTML = bookText; //"<li>Hello World 1</li>" + "<li>Hello World 2</li>" + "<li>Hello World 3</li>";
   parentElement.appendChild(newList);
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


/*
​
let addTextBtn = document.querySelector("#addArticleBtn");
​
addTextBtn.addEventListener("click", () => {
  let input = document.querySelector("#addArticleInput");
  let newParagraph = document.createElement("p");
  newParagraph.innerText = input.value;
  let parentElement = document.querySelector("#addArticle");
  parentElement.appendChild(newParagraph);
  input.value = ""; // resets the input field
});
*/