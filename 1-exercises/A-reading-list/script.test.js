const path = require("path");
const { JSDOM } = require("jsdom");
const { default: userEvent } = require("@testing-library/user-event");

let page = null;

beforeEach(async () => {
  page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
    resources: "usable",
    runScripts: "dangerously",
  });

  // do this so students can use element.innerText which jsdom does not implement
  Object.defineProperty(page.window.HTMLElement.prototype, "innerText", {
    get() {
      return this.textContent;
    },
    set(value) {
      this.textContent = value;
    },
  });

  return new Promise((res) => {
    page.window.document.addEventListener("load", res);
  });
});

afterEach(() => {
  page = null;
});

describe("Reading list", () => {
  test("renders a list of books with author and title", () => {
    const readingList = page.window.document.querySelector("#reading-list");

    expect(readingList).toHaveTextContent("The Design of Everyday Things");
    expect(readingList).toHaveTextContent("Don Norman");

    expect(readingList).toHaveTextContent("The Most Human Human");
    expect(readingList).toHaveTextContent("Brian Christian");

    expect(readingList).toHaveTextContent("The Pragmatic Programmer");
    expect(readingList).toHaveTextContent("Andrew Hunt");
  });
  test("each book in the list has an image", () => {
    const firstLi = page.window.document.querySelector(
      "#reading-list > :first-child"
    );
    expect(firstLi).toContainHTML(
      `<img src="https://blackwells.co.uk/jacket/l/9780465050659.jpg" />`
    );

    const secondLi = page.window.document.querySelector(
      "#reading-list > :nth-child(2)"
    );
    expect(secondLi).toContainHTML(
      `<img src="https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg" />`
    );

    const thirdLi = page.window.document.querySelector(
      "#reading-list > :nth-child(3)"
    );
    expect(thirdLi).toContainHTML(
      `<img src="https://blackwells.co.uk/jacket/l/9780135957059.jpg" />`
    );
  });
  test("background color changes depending on whether book has been read", () => {
    const firstLi = page.window.document.querySelector(
      "#reading-list > :first-child"
    );
    expect(firstLi).toHaveStyle({ backgroundColor: "red" });

    const secondLi = page.window.document.querySelector(
      "#reading-list > :nth-child(2)"
    );
    expect(secondLi).toHaveStyle({ backgroundColor: "green" });

    const thirdLi = page.window.document.querySelector(
      "#reading-list > :nth-child(3)"
    );
    expect(thirdLi).toHaveStyle({ backgroundColor: "green" });
  });
});
