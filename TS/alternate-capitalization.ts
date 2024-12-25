/**
 * Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
Good luck!
If you like this Kata, please try:
 */

export function capitalize(s: string): [string, string] {
  const array = s.split('');

  const oddArray: string[] = [];
  const evenArray: string[] = [];

  array.forEach(function (letter, index) {
    if (index % 2 === 0 || index == 0) {
      evenArray.push(letter.toUpperCase());
    } else {
      evenArray.push(letter);
    }
  });

  const evenString = evenArray.join('');

  array.forEach(function (letter, index) {
    if (index % 2 !== 0) {
      oddArray.push(letter.toUpperCase());
    } else {
      oddArray.push(letter);
    }
  });

  const oddString = oddArray.join('');

  return [evenString, oddString]; // your code here
}

// console.log(capitalize('abcdef'));

function capitalizeReduce(s: string): [string, string] {
  const result = s.split('').reduce<{ evenWord: string; oddWord: string }>(
    (acc, letter, index) => {
      acc.evenWord += index % 2 === 0 || index == 0 ? letter.toUpperCase() : letter;
      acc.oddWord += index % 2 !== 0 ? letter.toUpperCase() : letter;

      return acc;
    },
    { evenWord: '', oddWord: '' },
  );

  return [result.evenWord, result.oddWord];
}

console.log(capitalizeReduce('abcdef'));

// ['a', 'b', 'c', ....]
//
