/* 
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
  return str
    .split("")
    .filter(
      (el) =>
        el.toLowerCase() != "o" &&
        el.toLowerCase() != "a" &&
        el.toLowerCase() != "e" &&
        el.toLowerCase() != "i" &&
        el.toLowerCase() != "u"
    )
    .join("");
}

console.log(disemvowel("Heelo EgOr"));

// better solution

const vowels = "aeiou";

function disemvowel1(str) {
  return str
    .split("")
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join("");
}
