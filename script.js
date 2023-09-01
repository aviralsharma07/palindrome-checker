const inputText = document.getElementById("inputText");
const checkBtn = document.querySelector(".check-btn");
const result = document.querySelector(".result");
const body = document.body;
console.log(inputText, checkBtn, result);

checkBtn.addEventListener("click", function () {
  const wordToCheck = inputText.value;
  const isPailindrome = checkPailindrome(wordToCheck);
  result.style.fontWeight = "700";
  if (isPailindrome) {
    result.innerHTML = `${wordToCheck} is pailindrome`;
    result.style.color = "rgb(0, 128, 0)";
  } else {
    result.innerHTML = `${wordToCheck} is not pailindrome`;
    result.style.color = "rgb(255, 0, 0)";
  }
});

inputText.addEventListener("input", function () {
  result.innerHTML = "";
  result.textContent = "Type the word you want to Check !!";
  result.style.color = "black";
  result.style.fontWeight = "500"; // Clear the previous result when input changes
});

function checkPailindrome(str) {
  let word = str.replace(/[\W_]+/g, "").toLowerCase();
  let reverseWord = word.split("").reverse().join("");
  return word === reverseWord;
}
