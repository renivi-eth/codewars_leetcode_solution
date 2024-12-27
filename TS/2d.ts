[
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
];

function spiralize(size) {
  const matrix = Array(size)
    .fill([])
    .map(() => Array(size).fill(0));

  return matrix;
}

console.log(spiralize(5));
