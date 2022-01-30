# List of names

The function **listOfNames** takes an array of people objects:

```js
let people = [
  { name: "Elizabeth", job: "Queen" },
  { name: "William", job: "Prince" },
  { name: "Kate", job: "Princess" },
];
```

Render a list of people and their jobs on the page.

## Exercise

For each object in the array:

- Add a `<h1>` tag to the html containing the name of the person.
- Add a `<h2>` tag to the html containing the job of the person.
- All of your HTML should go inside the `<div>` with the id **"content"**:

```html
<div id="content">
  <h1>{Name Here}</h1>
  <h2>{Job Here}</h2>
  .....
</div>
```
