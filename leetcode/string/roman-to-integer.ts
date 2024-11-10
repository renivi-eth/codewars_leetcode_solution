/**
 * https://leetcode.com/problems/roman-to-integer
 */
function romanToInt(s: string): number {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let ans = 0;

  for (let i = s.length - 1; ~i; i--) {
    let num = roman[s.charAt(i)];

    if (4 * num < ans) {
      ans = ans - num;
    } else {
      ans = ans + num;
    }
  }
  return ans;
}

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
