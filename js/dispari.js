const numberSelect = document.getElementById("number-select");
const typeSelect = document.getElementById("number-type");

const playBtn = document.getElementById("play-btn");

const resultCard = document.getElementById("result-card");
const resultCardTitle = resultCard.querySelector(".card-title");
const resultCardText = resultCard.querySelector(".card-text");

const maxNumber = 5;
// Generate number select options
initNumberSelect(maxNumber);

playBtn.addEventListener("click", function () {
  resultCard.classList.add("opacity-0");
  const humanNumber = parseInt(numberSelect.value);
  const humanPrediction = typeSelect.value;
  const aiNumber = generateRandomIntBetween(1, maxNumber);
  const finalNumber = humanNumber + aiNumber;
  let hasUserWon = false;
  if (isEven(finalNumber) && humanPrediction === "even") {
    hasUserWon = true;
  } else if (!isEven(finalNumber) && humanPrediction === "odd") {
    hasUserWon = true;
  }
  generateResultCard(hasUserWon, humanNumber, aiNumber);
});

function generateResultCard(hasWon, humanNumber, aiNumber) {
  let messageText = `You choose ${humanNumber} and our AI choose ${aiNumber}. The number ${
    humanNumber + aiNumber
  } is `;
  if (isEven(humanNumber + aiNumber)) {
    messageText += "even.";
  } else {
    messageText += "odd.";
  }

  if (hasWon) {
    resultCardTitle.textContent = "YOU WON!";
    messageText += "Great Job!";
  } else {
    resultCardTitle.textContent = "YOU LOST!";
    messageText += "Try again!";
  }
  resultCardText.textContent = messageText;
  resultCard.classList.remove("opacity-0");
}

function initNumberSelect(maxNumber) {
  for (let index = 1; index <= maxNumber; index++) {
    const optionElement = document.createElement("option");
    optionElement.setAttribute("value", `${index}`);
    optionElement.textContent = `${index}`;
    numberSelect.appendChild(optionElement);
  }
}

function generateRandomIntBetween(minValue, maxValue) {
  const number = Math.ceil(Math.random() * (maxValue - minValue)) + minValue;
  return number;
}

function isEven(numberToCheck) {
  let isEven = parseInt(numberToCheck) % 2 === 0;
  return isEven;
}
