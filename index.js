var button = document.getElementById("btn2");
const windowBody = document.querySelector("window-body");

const btn1 = document.getElementById("btn1");
const response = document.querySelector("p");

var counterVal = 0;

function incrementClick() {
  counterVal++;
  console.log(counterVal);
  if (counterVal >= 5) button.remove();
}

const stupidButton = () => {
  button.style.top = Math.random() * 300 + "px";
  button.style.left = Math.random() * 300 + "px";
};

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "white";
});
button.addEventListener("click", () => {
  stupidButton();
});
