function readingList(books) {
  // Write your code here...

let ul_tag = document.createElement("ul");
let content_tag = document.querySelector("#content");
content_tag.appendChild(ul_tag);
books.forEach(item => {
  let li_tag = document.createElement("li");
  ul_tag.appendChild(li_tag);
  let paragraph = document.createElement("p");
  li_tag.appendChild(paragraph);
  let a_tag = document.createElement("a");
  li_tag.appendChild(a_tag);
  let img_tag = document.createElement("img");
  a_tag.appendChild(img_tag);
  paragraph.innerText = `${item.title} ${item.author}`;
  img_tag.src = item.bookCoverImage;
  a_tag.href = item.bookCoverImage;
  item.alreadyRead ? li_tag.style.background = "green" : li_tag.style.background = "red"
  li_tag.className = "list_item";
  img_tag.classList.add("imgTag")
  paragraph.addEventListener("click", () => {
    img_tag.classList.toggle("move");
  })
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