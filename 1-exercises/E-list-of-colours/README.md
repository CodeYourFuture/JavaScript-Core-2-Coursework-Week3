# List of colours

The function **listOfColours** takes an array of colour strings:

```js
const colours = ["blue", "purple", "orange"];
```

We want to render a dropdown list of colours on the page. When a colour is selected, the selection will appear on screen e.g. 'You have selected: blue'.
The text informing the user of their selection will also change colour to match the selected colour e.g. 'You have selected: blue' will display all in blue. 'You have selected: green' will be green etc.

## Exercise

- Create a `<select>` element.
- Create a `<p>` element.
- Iterate through the array of colours.
- Each element in the array should add a `<option>` to the `<select>`, where the `<option>` is the element in the array.
- Each `<option>` should have a 'change' event listener to update the contents and colour of the `<p>` with the selected colour.
- All of your HTML should go inside the `<div>` with the id **"content"**.
