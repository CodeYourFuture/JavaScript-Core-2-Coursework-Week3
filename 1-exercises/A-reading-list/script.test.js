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
    const firstListItem = page.window.document.querySelector(
      "#reading-list > :first-child"
    );

    expect(firstListItem).toHaveTextContent("The Design of Everyday Things");
    expect(firstListItem).toHaveTextContent("Don Norman");

    const secondListItem = page.window.document.querySelector(
      "#reading-list > :nth-child(2)"
    );
    expect(secondListItem).toHaveTextContent("The Most Human Human");
    expect(secondListItem).toHaveTextContent("Brian Christian");
  });
  test("each list item has an image", () => {
    const firstListItem = page.window.document.querySelector(
      "#reading-list > :first-child"
    );
    expect(firstListItem).toContainHTML(
      `<img src="https://blackwells.co.uk/jacket/l/9780465050659.jpg" />`
    );

    const secondListItem = page.window.document.querySelector(
      "#reading-list > :nth-child(2)"
    );
    expect(secondListItem).toContainHTML(
      `<img src="https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg" />`
    );
  });
  test("background color changes depending on whether book has been read", () => {
    const firstListItem = page.window.document.querySelector(
      "#reading-list > :first-child"
    );
    expect(firstListItem).toHaveStyle({ backgroundColor: "red" });

    const secondListItem = page.window.document.querySelector(
      "#reading-list > :nth-child(2)"
    );
    expect(secondListItem).toHaveStyle({ backgroundColor: "green" });

    const thirdListItem = page.window.document.querySelector(
      "#reading-list > :nth-child(3)"
    );
    expect(thirdListItem).toHaveStyle({ backgroundColor: "green" });
  });
});
