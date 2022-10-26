const form = document.querySelector("form");
const main = document.querySelector("main");

// create new elements for each tag in html
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const small = document.createElement("small");
const p = document.createElement("p");

// submit event listener, but default the browser will refresh
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // prevent.Default will prevent the refresh

  // event.target - think of callerID - what caused the event
  const fD = new FormData(event.target);

  // takes the input and pairs it with the values (what users type in)
  const values = Object.fromEntries(fD.entries());

  // Object Destructuring - grabs values for each
  const { title, subtitle, author, content } = values;

  h1.textContent = title;
  h2.textContent = subtitle;
  small.textContent = author;
  p.textContent = content;

  // puts textContent into main, publishes content into the form
  main.append(h1, h2, small, p);
});
