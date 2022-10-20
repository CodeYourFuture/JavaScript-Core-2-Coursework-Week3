function readingList(books) {
  const content = document.querySelector("#content");
  books.forEach((book) => {
    let unorderedList = document.createElement("ul");
    let listItem = document.createElement("li");

    let paragraph = document.createElement("p");
    let image = document.createElement("img");
    
    listItem.append(paragraph, image);
    unorderedList.append(listItem);
    content.append(unorderedList);


    content.style.display = "flex";
    content.style.flexDirection = "column";
    paragraph.innerText = book.title;
    image.src = book.bookCoverImage;
    unorderedList.style.alignSelf = "center";
    listItem.style.listStyleType = "none";
    listItem.style.padding = "2rem";
    paragraph.style.fontSize = "1.5rem";
    paragraph.style.textAlign = "center";

    
    if (book.alreadyRead) {
      listItem.style.backgroundColor = "green";
    } else {
      listItem.style.backgroundColor = "red";
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