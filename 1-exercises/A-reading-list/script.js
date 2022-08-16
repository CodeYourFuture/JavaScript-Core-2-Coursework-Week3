function readingList(books) {
  // Write your code here...
  contentContainer.append(firstContainer, secondContainer, thirdContainer);
  container1();
  container2();
  container3();
}

//function
function container1() {
  firstContainer.append(firstList, firstImg);
  firstContainer.style.padding = 20 + "px";
  firstContainer.style.marginBottom = 10 + "px";
  firstList.innerHTML = books[0].title;
  firstList.style.fontSize = 2 + "rem";
  firstList.style.fontWeight = 700;
  firstList.style.marginBottom = 20 + "px";
  firstImg.src = books[0].bookCoverImage;
  firstContainer.style.backgroundColor = "red";
}

function container2() {
  secondContainer.append(secondList, secondImg);
  secondContainer.style.padding = 20 + "px";
  secondContainer.style.marginBottom = 10 + "px";
  secondList.innerHTML = books[1].title;
  secondList.style.fontSize = 2 + "rem";
  secondList.style.fontWeight = 700;
  secondList.style.marginBottom = 20 + "px";
  secondImg.src = books[1].bookCoverImage;
  secondContainer.style.backgroundColor = "green";
}
function container3() {
  thirdContainer.append(thirdList, thirdImg);
  thirdContainer.style.padding = 20 + "px";
  thirdContainer.style.marginBottom = 10 + "px";
  thirdList.innerHTML = books[2].title;
  thirdList.style.fontSize = 2 + "rem";
  thirdList.style.fontWeight = 700;
  thirdList.style.marginBottom = 20 + "px";
  thirdImg.src = books[2].bookCoverImage;
  thirdContainer.style.backgroundColor = "green";
}

//variable
const contentContainer = document.querySelector("#content");
const firstContainer = document.createElement("div");
const firstList = document.createElement("li");
const firstImg = document.createElement("img");
const secondContainer = document.createElement("div");
const secondList = document.createElement("li");
const secondImg = document.createElement("img");
const thirdContainer = document.createElement("div");
const thirdList = document.createElement("li");
const thirdImg = document.createElement("img");

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
