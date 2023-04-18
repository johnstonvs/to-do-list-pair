// Assigns various elements to variables
let olElem = document.querySelector("ol");
let addButton = document.querySelector("#add");
let item = document.querySelector("#addItem");
let form = document.querySelector("form");
let rmButtons = [];

const addItem = string => {
  // Creates li element
  let liElem = document.createElement("li");
  let liInner = document.createTextNode(`${string}`);
  liElem.appendChild(liInner);
  // Creates button element and adds to li element
  let buttonElem = document.createElement("button");
  let buttonInner = document.createTextNode("Remove");
  buttonElem.appendChild(buttonInner);
  liElem.appendChild(buttonElem);
  // create a class attr. for liElm and buttonElm.
  liElem.classList.add(`${string}`)
  buttonElem.classList.add(`${string}`)
  buttonElem.setAttribute("id", "Remove")
  // Appends li element to ol
  olElem.appendChild(liElem);

  // Adds funcionality to new remove buttons
  rmButtons.push(liElem);
  rmButtons.forEach(item => item.addEventListener("click", (eventObject) => {
    let listElement = document.querySelector(`.${eventObject.srcElement.className}`);
    listElement.remove();
  }))
}

const rmItem = rmClass => {
    //remove every element that has the class rmClass
    let a = document.querySelectorAll(`.${rmClass}`);
    a.remove();
}

let input;
item.addEventListener("input", (eventObject) => {input = eventObject.target.value});

addButton.addEventListener("click", (eventObject) => {
console.log(eventObject.srcElement.className);
eventObject.preventDefault();
addItem(input);
});

