
const body = document.querySelector("body");
const form = document.querySelector(".js-form");
const guess = document.querySelector(".js-guess");

const input = form.querySelector("input");
const guessInput = guess.querySelector("input");
const result = document.querySelector(".js-result");

//const num = input.value;
//const guessNum = guessInput.value;

function handlerNumber(event) {
  event.preventDefault();
  const h3 = body.querySelector("h3");
  const span = h3.querySelector("span");
  const nb = input.value;
  span.innerHTML = `${nb}`;
} //range 움직이면 숫자도 같이 변경

function handlersubmit(event) {
  event.preventDefault();
  const maxRange = input.value;
  //let randomNum = Math.random() * (maxRange * 1);
  //floorNum = Math.floor(randomNum);
  let randomNum = Math.floor(Math.random() * (maxRange * 1));
  const Nb = guessInput.value;
  result.innerHTML = `you choose : ${Nb}, the machine : ${randomNum}`;
  if (parseInt(Nb, 10) <= randomNum) {
    const lost = document.createElement("h4");
    lost.innerHTML = "you lost!";
    result.appendChild(lost);
  } else {
    const win = document.createElement("h4");
    win.innerHTML = "you win!";
    result.appendChild(win);
  }
}

function init() {
  input.addEventListener("input", handlerNumber);
  guess.addEventListener("submit", handlersubmit);
}

init();
