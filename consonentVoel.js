// const string = "Hello, World!";
// let vowels = 0;
// let consonants = 0;

// for (let i = 0; i < string.length; i++) {
//   const char = string[i].toLowerCase();
//   if ("aeiou".includes(char)) {
//     vowels++;
//   } else if (char >= "a" && char <= "z") {
//     consonants++;
//   }
// }

// console.log("Vowels:", vowels);
// console.log("Consonants:", consonants);

const str = "Hello World";
const vowels = str.match(/[aeiou]/gi);
const consonants = str.match(/[^aeiou\s]/gi);

console.log("Vowels:", vowels); // Output: ["e", "o", "o"]
console.log("Consonants:", consonants); // Output: ["H", "l", "l", "W", "r", "l", "d"]
