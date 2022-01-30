# Highlight Words

The function **highlightWords** takes a paragraph of words in the form of one long string:

```js
const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero...";
```

It also takes an array of colour strings as it's second argument:

```js
const colours = ["blue", "purple", "orange"];
```

We want to render the paragraph on the page, along with a dropdown with the different colour options in it. When we click on a word in the paragraph we want to highlight it with the colour selected in the dropdown. If 'none' is selected in the dropdown, then no highlighting should be applied to the words, or highlighting should be removed if the clicked word is already highlighted.

## Exercise

- Create a `<p>` element.
- Create a `<select>` element.
- Iterate over the options array and create an `<option>` element in the `<select>` for each element.
- You'll need to turn the paragraph into an array to iterate over it. You can use the `.split(" ")` method here.
- Iterate over the array of words.
- For each word, create a `<span>` element and set the innerText to the word, plus a space - " ". Add this to the `<p>`.
- Each `<span>` should have an eventListener that will listen for clicks.
- When clicked, we need to check the value of the `<select>` element using the `.value` property.
- We can then update the `background-color` property of the `<span>` with the value of the select - remember that the value "none" is a special case and we need to be handled differently.
- All of your HTML should go inside the `<div>` with the id **"content"**.
