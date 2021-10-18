const inputField = document.getElementById("word-input");
const checkBtn = document.getElementById("word-check");

const resultCard = document.getElementById("result-card");
const resultCardTitle = resultCard.querySelector(".card-title");
const resultCardText = resultCard.querySelector(".card-text");

const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", cardReset);
checkBtn.addEventListener("click", function () {
  resultCard.classList.add("opacity-0");
  const word = inputField.value;
  //validate input field
  let isValid = validateWordInput(word);
  //if valid
  if (isValid) {
    let cardText;
    resultCardTitle.textContent = `Is "${word}" palindrome?`;
    //   check word
    let isPalindrome = isWordPalindrome(word);
    //   show result
    if (isPalindrome) {
      cardText = `The word "${word}" is palindrome, so it can be read both from right to left and from left to right!`;
    } else {
      cardText = `The word "${word}" is NOT palindrome, try again!`;
    }
    resultCardText.textContent = cardText;
    resultCard.classList.remove("opacity-0");
  }
});

/**
 *
 * @param {string} word
 * @returns
 */
function validateWordInput(word) {
  let isValid = true;
  let errorMessage;
  const sentenceArray = word.split(" ");
  if (sentenceArray.length == 0 || sentenceArray[0] === "") {
    isValid = false;
    errorMessage = `Word can't be empty and can't start with a space.`;
  } else if (sentenceArray.length > 1) {
    isValid = false;
    errorMessage = `With free version you can only check one word and not an entire sentence.`;
  }

  // activate feedback if !isValid
  if (!isValid) {
    //activate feedback
    activateInputFeedback(errorMessage);
  }
  return isValid;
}
/**
 *
 * @param {string} wordToCheck
 */
function isWordPalindrome(wordToCheck) {
  // transform string to lowercase
  wordToCheck = wordToCheck.toLocaleLowerCase();
  // create array of letter from string
  let wordArray = wordToCheck.split("");
  // reverse the array
  wordArray.reverse();
  // generate a word from the reversed array
  let reversedWord = wordArray.join("");
  // check if the wordToCheck is equal to reversedWord
  let isPalindrome = wordToCheck === reversedWord;
  // return result
  return isPalindrome;
}

function activateInputFeedback(feedbackText = "Invalid value.") {
  const inputFeedback = document.getElementById("word-input-feedback");
  inputFeedback.innerText = feedbackText;
  inputField.classList.add("is-invalid");
}

function cardReset() {
  resultCard.classList.add("opacity-0");
  resultCardTitle.textContent = "";
  resultCardText.textContent = "";
}
