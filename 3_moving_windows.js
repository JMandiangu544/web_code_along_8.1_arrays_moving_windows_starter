function solution(a, window_size) {
 
  let result = [];
  for (let i = 0; i <= a.length - window_size; i++) {
    let sum = 0;
    for (let j = 0; j < window_size; j++) {
      sum += a[i + j];
    }

    // Calculate the average and push it to the result array
    result.push(sum / window_size);
  }

  return result;
}

// Example usage:
console.log(solution([20, 64, 73, 58, 74], 4)); 
// Output: [53.75, 67.25]
