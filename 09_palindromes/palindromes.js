const palindromes = function (word) {
  let wordArr = Array.from(word);
  wordArr.forEach((elem) => {
    if (elem.includes("!") || elem.includes(".")) {
      wordArr.splice(-1, 1);
    }
  })
  let orgStringArr = Array.from(word);
  orgStringArr.forEach((elem) => {
    if (elem.includes("!") || elem.includes(".")) {
      orgStringArr.splice(-1, 1);
    }
  })
  let orgString = orgStringArr.join("").toUpperCase();
  orgString = orgString.split(" ").join("").split(",").join("");
  let reversed = wordArr.reverse();
  let reversedString = reversed.join("").toUpperCase();
  reversedString = reversedString.split(" ").join("").split(",").join("");
  if (reversedString === orgString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
