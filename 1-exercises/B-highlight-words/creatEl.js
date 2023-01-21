export function createElement(type, ...args) {
  //console.log(arguments);
  //console.log(args);

  let attributes, eventHandler, inrText, rID;
  args.forEach((el) => {
    if (typeof el === "string" && /[0-9]/.test(el)) {
      rID = el;
    } else if (typeof el === "object") {
      attributes = el;
    } else if (typeof el === "function") {
      eventHandler = el;
    } else if (typeof el === "string" && !/[0-9]/.test(el)) {
      inrText = el;
    } else {
      console.log("parameter not found");
    }
  });

  let element = document.createElement(type);
  for (let key in attributes) {
    if (key === "class") {
      element.classList.add(...attributes[key]);
    } else if (key === "innerText" && inrText) {
      element[key] = inrText;
    } else if (key === "id" && rID) {
      element[key] = rID ? rID : null;
    } else {
      element[key] = attributes[key];
    }
  }
  console.log(element);
  if (eventHandler) {
    element.addEventListener("click", eventHandler);
  }
  return element;
}
