// function newObj2(arr) {
//   console.log(arr);
//   let object = Object.assign({}, ...arr);
//   //object.keys(obj)

//   return object;
// }
// let imgArr = [
//   { class: ["class1", "class2", "class3"] },
//   { id: " " },
//   { src: "img_girl.jpg" },
//   { alt: "girl in jacket" },
// ];
// let liArr = [{ class: ["classPlaceHolder"] }, { id: " " }];

// let pArr = [
//   { class: ["p-Class1", "p-Class2"] },
//   { id: " " },
//   { textContent: " " },
// ];
// let imgObj1 = newObj2(imgArr);
import { createElement } from "../B-highlight-words/creatEl.js";
// const createElement = function (type, attributes) {
//   let element = document.createElement(type);
//   for (let key in attributes) {
//     if (key === "class") {
//       element.classList.add(...attributes[key]);
//     } else {
//       element[key] = attributes[key];
//     }
//   }
//   return element;
// };

function readingList(books) {
  let parUl = document.querySelector("#reading-list");
  let testNodes = books.map(
    ({ title, author, alreadyRead, bookCoverImage }) => {
      let isRead = alreadyRead ? "green" : "red";
      let liParent = createElement("li", { class: ["liParent", isRead] });
      let innerContextT = `${title} by ${author}`;
      let pEl = createElement("p", { textContent: innerContextT });
      let img = createElement("img", {
        class: [isRead],
        src: bookCoverImage,
        alt: "book cover",
      });
      liParent.append(pEl, img);
      return liParent;
    }
  );
  parUl.append(...testNodes);
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

//module.exports = createElement;
