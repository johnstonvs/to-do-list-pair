// Assigns various elements to variables
let olElem = document.querySelector('ol');
let addButton = document.querySelector("#add");
let item = document.querySelector("#addItem");
let form = document.querySelector('form');

const addItem = string => {
  //creates html element by tag name
  // Creates li element
  let liElem = document.createElement('li');
  let liInner = document.createTextNode(`${string}`);
  liElem.appendChild(liInner);

  // Creates button element and adds to li element
  let buttonElem = document.createElement('button');
  let buttonInner = document.createTextNode('Remove');
  buttonElem.appendChild(buttonInner);
  liElem.appendChild(buttonElem);

  // Appends li element to ol
  olElem.appendChild(liElem);
}

// add functionality to remove button

let input;
item.addEventListener("input", (eventObject) => {input = eventObject.target.value});

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  addItem(input);
});
