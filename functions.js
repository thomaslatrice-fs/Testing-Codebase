//adds all numbers in an array
const sumOfArray = (arr) => {
  //confirms an array
  if (!Array.isArray(arr)) return 0;

  let sum = 0;
  //go through each item
  arr.forEach((num) => {
    //only add if number
    if (typeof num === "number") {
      sum += num;
    }
  });
  return sum;
};

//finds the biggest number in an array
const findMax = (arr) => {
  //check for bad inout
  if (!Array.isArray(arr) || arr.length === 0) return null;

  let max = null;

  arr.forEach((num) => {
    if (typeof num === "number") {
      if (max === null || num > max) {
        max = num;
      }
    }
  });
  return max;
};

//COUNTS VOWELLS IN A STRING
const countVowels = (str) => {
  const vowels = "aeiou";
  let count = 0;

  //makes sure its a lowercase string
  str = String(str).toLowerCase();
  //loop thru letters
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};

//CAPITALIZE FIRST LETTER OF EACH WORD
const capitalWords = (str) => {
  str = String(str);

  return str
    .split(" ") //split into words
    .map((word) => {
      if (word === "") return "";
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" "); //join back into sentance
};

module.exports = {
  sumOfArray,
  findMax,
  countVowels,
  capitalWords,
};
