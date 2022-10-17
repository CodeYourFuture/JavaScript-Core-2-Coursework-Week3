function readingList(books) {
  // Write your code here...
  let content = document.getElementById("content");
  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);
  content.style.cssText = "display:block;";
  books.forEach((element) => {
    let list = document.createElement("li");
    unorderedList.appendChild(list);
    let paragraph = document.createElement("p");
    let image = document.createElement("img");
    list.appendChild(paragraph);
    paragraph.innerText = `${element.title} by ${element.author}`;
    image.src = element.bookCoverImage;
    list.appendChild(image);
    list.style.cssText = "background-color: green";
    image.style.cssText = "width:130px ; height:200px ; margin-top:10px ";
    paragraph.style.cssText = "font-size: 20px; margin-bottom: 10px; font:bold";
  });
  let img1 = document.querySelector("li");
  img1.style.cssText = "background-color: red";
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
