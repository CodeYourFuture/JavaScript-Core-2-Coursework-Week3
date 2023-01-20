//note object createion template in testfolder
import { createElement } from "../B-highlight-words/creatEl.js";

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
