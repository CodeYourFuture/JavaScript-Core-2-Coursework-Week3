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
