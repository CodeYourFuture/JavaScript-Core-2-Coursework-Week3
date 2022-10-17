function readingList(books) {
  // Write your code here...
  let content = document.getElementById("content");
  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);

  books.forEach((element) => {
    let list = document.createElement("li");
    unorderedList.appendChild(list);
    let paragraph = document.createElement("p");
    let image = document.createElement("img");
    list.appendChild(paragraph);
    paragraph.innerText = `${element.title} by ${element.author}`;
    image.src = element.bookCoverImage;
    paragraph.appendChild(image);
    list.style.cssText = "margin-bottom:20px ; background-color: green;";
    image.style.cssText =
      "width:130px ; height:200px ; margin-left:5px ; margin-top:20px ";
    paragraph.style.cssText = "margin-top:2px";
  });
}

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
