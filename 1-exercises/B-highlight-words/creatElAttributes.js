export function newObj2(arr) {
  //console.log(arr);
  let object = Object.assign({}, ...arr);
  return object;
}

export function randomId() {
  let randomId = Math.random().toString(16).slice(6);
  return randomId;
}

// export let randomId = Math.random().toString(16).slice(6);
//maybe an issue with exporting randomId as a variable

//el attribute
export let TestSpan1 = [
  { id: `${randomId()}` },
  { class: ["classSpan"] },
  { innerText: `text` },
];

// note cant add place holders in interperlation and use export

export let liElemArr = [
  { id: `${randomId()}` },
  { innerText: `text` },
  { class: ["li-Class"] },
];

// Elements for forms and general use //

export let formElemArr = [
  { id: `${randomId()}` },
  { class: ["form-Class"] },
  { innerText: null },
];
export let fieldsetElemArr = [
  { id: `${randomId()}` },
  { class: ["fieldset-Class"] },
  { innerText: null },
];
export let legendElemArr = [
  { id: `${randomId()}` },
  { class: ["legend-Class"] },
  { innerText: "place holder" },
];
export let labelElemArr = [
  { id: `${randomId()}` },
  { innerText: "place holder" },
  { class: ["label-Class"] },
  { for: null },
];
export let selectElemArr = [
  { id: `${randomId()}` },
  { innerText: `text` },
  { class: ["select-Class"] },
  { name: null },
];
export let optionElemArr = [
  { id: `${randomId()}` },
  { innerText: `text` },
  { class: ["option-Class"] },
  { value: null },
];

export let buttonElemArr = [
  { id: `${randomId()}` },
  { class: ["button-Class"] },
  { innerText: null },
];
export let spanElemArr = [
  { id: `${randomId()}` },
  { class: ["span-Class"] },
  { innerText: null },
];
//questions
// can variable not have a (-) in them? li-Elem-Arr, seem to show an error , see below
// export let li-Elem-Arr = [{ innerText: `text` }, { class: ["li-Class"] }];
