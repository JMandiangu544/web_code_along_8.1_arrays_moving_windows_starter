function solution(arr, row, col) {
  let sum = 0;

  // Iterate through the depth dimension
  for (let depth = 0; depth < arr[row][col].length; depth++) {
    sum += arr[row][col][depth];
  }

  return sum;
}

// Example usage:
const arr = [
  [
    [1, 2, 3, 4, 0, 6],
    [7, 0, -9, 10, 11, 12],
    [0, 14, 15, 16, 17, 18],
  ],
  [
    [0, 1, 23, 17, 29, 13],
    [1, -2, 3, 4, 5, -6],
    [7, 0, 9, 8, 6, 1],
  ]
];

console.log(solution(arr, 1, 2)); // Output: 31
