// Homework 1
// Homework 1.0
console.log(`Homework 1.0 🔽`);
for (i = 0; i < 10; i++) {
  console.log(`Hello`);
}
// Homework 1.1
console.log(`Homework 1.1 🔽`);
for (i = 0; i < 10; i++) {
  console.log(i);
}
// Homework 1.2
console.log(`Homework 1.2 🔽`);
for (i = 9; i >= 0; i--) {
  console.log(i);
}
// Homework 1.3
console.log(`Homework 1.3 🔽`);
for (i = 13; i <= 19; i++) {
  console.log(i);
}
// Homework 1.4
console.log(`Homework 1.4 🔽`);
for (i = 22; i >= 11; i--) {
  console.log(i);
}
// Homework 1.5
console.log(`Homework 1.5 🔽`);
for (i = 22; i <= 40; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// Homework 1.6
console.log(`Homework 1.6 🔽`);
for (i = 3; i <= 9; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}
// Homework 1

// Homework 2
const p = document.createElement("p");
const button = document.createElement("button");

p.textContent = "Hello ";
document.body.append(p);
p.append(button);
button.textContent = "Click Me";
button.setAttribute("type", "button");
button.classList.add("flexMargin");

button.addEventListener("click", function () {
  console.log(`This Button Was Created From Js And It Was Clicked`);
});

const aLink = document.createElement("a");
aLink.textContent = `Go To Google.Com`;
aLink.setAttribute("href", "https://www.google.com/");
aLink.setAttribute("target", "_blank");
document.body.append(aLink);
// Homework 2

// Homework 3
for (i = 1; i <= 10; i++) {
  const button2 = document.createElement("button");
  button2.textContent = `${i}`;

  button2.classList.add("flexMargin");
  document.body.append(button2);
}
// Homework 3
