function readingList(books) {
//   Iterate through the list of books.
// - For each book, create a `<p>` element with the book title and author.
// - Add an `<img>` to each book that links to a URL of the book cover.
// Use a `<ul>` and `<li>` to display the books and append it to the page.
  // Write your code here...
  let pElement = []; let imgElement = [];
  let contentEl = document.querySelector(`#content`)
  for(let i = 0; i < books.length; i++){
     pElement[i] = document.createElement("p")
     pElement[i].innerHTML = books[i].title +" "+ books[i].author;
     document.body.appendChild(pElement[i]);
     imgElement[i] = document.createElement("img");
     imgElement[i].src = books[i].bookCoverImage;
     document.body.appendChild(imgElement[i]);
  }
  // document.div.appendChild(pElement); // does not work 
    let ulEl = document.createElement("ul")
       document.body.appendChild(ulEl)

    let liEl = document.createElement("li")
  for ( let i = 0; i < books.length; i++){
   document.ulEl.appendChild(liEl);
  }
  // Change the style of the book depending on whether you have read it (green) or not (red). Hint: try adding some CSS classes to styles.css for these styles.
  for (let i = 0; i < books.length; i++){
    if (books[i].alreadyRead == false){
      imgElement[i].className = ".red";
    }else{
      imgElement[i].className = "#greenBtn";
    }
  }
}
//  All of your HTML should go inside the `<div>` with the id **"content"**.// does not work i tried above

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