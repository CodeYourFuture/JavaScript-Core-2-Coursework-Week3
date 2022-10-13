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

describe("Highlight words", () => {
  test("each paragraph word is rendered as a span element", () => {
    const paragraph =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

    const p = page.window.document.querySelector("p");
    paragraph.split(" ").forEach((word) => {
      expect(p).toContainHTML(`<span>${word} </span>`);
    });
  });
  test("select menu is created using the colours", () => {
    const select = page.window.document.querySelector("select");

    expect(select).toContainHTML('<option value="yellow">Yellow</option>');
    expect(select).toContainHTML('<option value="green">Green</option>');
    expect(select).toContainHTML('<option value="blue">Blue</option>');
    expect(select).toContainHTML('<option value="none">None</option>');
    expect(select).toHaveValue("Please choose a colour");
  });
  test("clicking on span updates its background color based off select menu", () => {
    const select = page.window.document.querySelector("select");

    const span = page.window.document.querySelector("span:nth-child(3)");
    expect(span).toHaveStyle({ backgroundColor: "none" });

    userEvent.selectOptions(select, ["Green"]);
    userEvent.click(span);
    expect(span).toHaveStyle({ backgroundColor: "green" });

    userEvent.selectOptions(select, ["Blue"]);
    userEvent.click(span);
    expect(span).toHaveStyle({ backgroundColor: "blue" });
  });
});
