const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const submitButton = document.getElementsByClassName("submitButton");
const ratingCard = document.getElementsByClassName("ratingState");
const thankYouCard = document.getElementsByClassName("thankYouState");
const selectionMessage = document.getElementsByClassName("selectionMessage");

const result = document.createElement("div");

const ratingOne = () => {
  one.style.backgroundColor = "grey";
  two.style.backgroundColor = "hsl(216, 12%, 8%)";
  three.style.backgroundColor = "hsl(216, 12%, 8%)";
  four.style.backgroundColor = "hsl(216, 12%, 8%)";
  five.style.backgroundColor = "hsl(216, 12%, 8%)";
  result.innerText = "You selected 1 out of 5";
  selectionMessage[0].appendChild(result);
};

const ratingTwo = () => {
  one.style.backgroundColor = "hsl(216, 12%, 8%)";
  two.style.backgroundColor = "grey";
  three.style.backgroundColor = "hsl(216, 12%, 8%)";
  four.style.backgroundColor = "hsl(216, 12%, 8%)";
  five.style.backgroundColor = "hsl(216, 12%, 8%)";
  result.innerText = "You selected 2 out of 5";
  selectionMessage[0].appendChild(result);
};

const ratingThree = () => {
  one.style.backgroundColor = "hsl(216, 12%, 8%)";
  two.style.backgroundColor = "hsl(216, 12%, 8%)";
  three.style.backgroundColor = "grey";
  four.style.backgroundColor = "hsl(216, 12%, 8%)";
  five.style.backgroundColor = "hsl(216, 12%, 8%)";
  result.innerText = "You selected 3 out of 5";
  selectionMessage[0].appendChild(result);
};

const ratingFour = () => {
  one.style.backgroundColor = "hsl(216, 12%, 8%)";
  two.style.backgroundColor = "hsl(216, 12%, 8%)";
  three.style.backgroundColor = "hsl(216, 12%, 8%)";
  four.style.backgroundColor = "grey";
  five.style.backgroundColor = "hsl(216, 12%, 8%)";
  result.innerText = "You selected 4 out of 5";
  selectionMessage[0].appendChild(result);
};

const ratingFive = () => {
  one.style.backgroundColor = "hsl(216, 12%, 8%)";
  two.style.backgroundColor = "hsl(216, 12%, 8%)";
  three.style.backgroundColor = "hsl(216, 12%, 8%)";
  four.style.backgroundColor = "hsl(216, 12%, 8%)";
  five.style.backgroundColor = "grey";

  result.innerText = "You selected 5 out of 5";
  selectionMessage[0].appendChild(result);
};

let showState = true;

const changeState = () => {
  showState = !showState;
  if (!showState) {
    ratingCard[0].style.display = "none";
    thankYouCard[0].style.display = "flex";
  }
};

submitButton[0].addEventListener("click", changeState);
one.addEventListener("click", ratingOne);
two.addEventListener("click", ratingTwo);
three.addEventListener("click", ratingThree);
four.addEventListener("click", ratingFour);
five.addEventListener("click", ratingFive);
