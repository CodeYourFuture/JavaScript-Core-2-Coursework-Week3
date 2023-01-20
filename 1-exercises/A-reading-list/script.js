function readingList(books) {
  const list = document.querySelector('#reading-list')

  books.forEach((book) => {
    //create the list item
    const listItems = document.createElement('li')

    if(book.alreadyRead){
      listItems.className = "bookHasBeenRead";
    }
    else{
      listItems.className = "bookHasNotBeenRead";
    }

    //create a "p" tag 
    const newPTags = document.createElement('p');
    
    //adding text to 'p' tag
    newPTags.innerText = `${book.author} - ${book.title}`

    //adding "p" tags to list items
    listItems.appendChild(newPTags)

    //create, manipulate, add 'img' tag for images
    const newImg = document.createElement('img')

    newImg.src = book.bookCoverImage;
    listItems.appendChild(newImg)

    //adding listItems with "li" to list('ul)
    list.appendChild(listItems);
  });

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
