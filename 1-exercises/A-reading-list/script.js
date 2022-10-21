function readingList(books) {
  const content = document.querySelector("#content")
  const unorderedList = document.createElement("ul")

  content.insertAdjacentElement("afterbegin", unorderedList);


books.forEach((item)=> {
  const listItem = Document.createElement("li")
  unorderedList.insertAdjacentElement("beforeend",listItem);
  const para = `<p>${item.title} by ${item.author}<p>`;
  const img = `<img src = ${item.bookCoverImage}>`
  listItem.insertAdjacentElement("beforeend", para);
  listItem.insertAdjacentElement("beforeend" ,img);

  if (item.alreadyRead) listItem.classList.add("green")
  else listItem.classList.add("red")
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