const addItem = string => {
  //creates html element by tag name
  let liElem = document.createElement('li');
  let inner = document.createTextNode(`${string}`);
  liElem.appendChild(inner);
  olElem.appendChild(liElem);
}

// Assigns various elements to variables
let olElem = document.querySelector('ol');

let addButton = document.querySelector("#add");

let item = document.querySelector("#addItem");

let form = document.querySelector('form');

//
let input ='add item';

item.addEventListener("input", (eventObject) => {input = eventObject.target.value});

if (typeof input === 'string') {
  form.addEventListener("submit", addItem(input));
} else {
  form.addEventListener("submit", alert('Enter a string'));
}
