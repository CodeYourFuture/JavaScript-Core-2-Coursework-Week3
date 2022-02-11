/*
- Iterate through the list of books.
- For each book, create a '<p>' element with the book title and author.
- Add an '<img>' to each book that links to a URL of the book cover.
- Use a '<ul>' and '<li>' to display the books and append it to the page.
- Change the style of the book depending on whether you have read it (green) or not (red). 
Hint: try adding some CSS classes to styles.css for these styles.
- All of your HTML should go inside the '<div>' with the id "content".
*/


function readingList(books) {
  let theContent = document.querySelector("#content") // FETCH THE ELEMENT THAT NEEDS MODIFYING
  let listView=document.createElement('ul');
  for (let eachBook of books) {
      // Use a '<li>' to display the books
      let listViewItem=document.createElement('li');
      // Change the style of the book depending on whether you have read it (green) or not (red). 
      if (eachBook.alreadyRead)
          listViewItem.classList.add("greenBkg")
      else
          listViewItem.classList.add("redBkg");

      // For each book, create a '<p>' element with the book title and author
      let myNewParagraph = document.createElement("p");
      myNewParagraph.innerText = eachBook.title + " by " + eachBook.author;
      // Add an '<img>' to each book that links to a URL of the book cover
      let bookImage = document.createElement("img");
      bookImage.src = eachBook.bookCoverImage; 
      // Ensure that the book covers are all the same size
      bookImage.setAttribute("width", "400");     
      bookImage.setAttribute("height", "599");

      // Append the title and book cover to the <li> element
      listViewItem.appendChild(myNewParagraph);
      listViewItem.appendChild(bookImage);
      // Append to the list
      listView.appendChild(listViewItem);
  }

  //  The list is now complete
  //  Append it to the page
      theContent.appendChild(listView);

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