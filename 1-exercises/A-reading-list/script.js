// let displayEl = document.getElementById("content");


// let listEl = document.createElement("UL");
// listEl.setAttribute("id", "listEl")
// displayEl.appendChild(listEl)


// let itemEl = document.createElement("LI");

// let text = document.createTextNode("List 1");
// itemEl.appendChild(text)
// document.getElementById("listEl").appendChild(itemEl);


function readingList(books) {
  // Write your code here...
  let display = document.querySelector('#content');
  let UlList = document.createElement('UL')

  display.appendChild(UlList);
  books.forEach(book => {

    let list = document.createElement('LI');
    // list.style.listStyle = "none"

    UlList.appendChild(list);
    let paragraph = document.createElement('P');
    paragraph.innerHTML = `${book.title}: ${book.author}`;
    list.appendChild(paragraph);
    let image = document.createElement('img');
    image.src = book.bookCoverImage;
    list.appendChild(image);
    if (book.alreadyRead === false) {
      list.style.backgroundColor = 'red';
    } else {
      list.style.backgroundColor = 'green';
    }
  });
}



// `${books.title}
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

// for (book in books) {
//   const heading = document.createElement("p");
//   const heading_text = document.createTextNode("The Design of Everyday Things");
//   heading.appendChild(heading_text);
//   document.body.appendChild(heading);
//   document.body.appendChild()
// }