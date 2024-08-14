export function accum(s: string): any {
  const res = s.split("");

  const a = res.map((a, i) => a.toUpperCase() + a.toLowerCase().repeat(i));

  console.log(a);

  return s
    .split("")
    .map((a, i) => a.toUpperCase() + a.toLowerCase().repeat(i))
    .join("-");
}

console.log(accum("abcd"));
// "abcd" -> A-Bb-Ccc-Dddd
// indexOf
