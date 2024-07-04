function solution(size) {
  let matrix = [];
  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = 0;
    }
  }

  // Fill the main diagonal with 1's
  for (let i = 0; i < size; i++) {
    matrix[i][i] = 1;
  }

  return matrix;
}

// Example usage:
console.log(solution(4));
// Output:
// [
//   [1, 0, 0, 0],
//   [0, 1, 0, 0],
//   [0, 0, 1, 0],
//   [0, 0, 0, 1]
// ]
