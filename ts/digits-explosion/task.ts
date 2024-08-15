export function explode(s: string): string {
  // your code here
  const arr = s.split("");
  let res = [];
  for (let el of arr) {
    res.push(el.repeat(parseInt(el)));
  }
  return res.join("");
}

console.log(explode("1023")); // 122333
