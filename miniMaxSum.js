function miniMaxSum(arr) {
  let min = [];
  let max = [];
  // sort array
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });
  // push minimum values into min array
  for (let i = 0; i < sortedArr.length - 1; i++) {
    let n = arr[i];
    min.push(n);
  }
  //push maximum values to max array
  for (let i = 1; i < sortedArr.length; i++) {
    let n = arr[i];
    max.push(n);
  }
  // calculate and return sum for both arrays
  let maxSum = max.reduce((a, b) => {
    return a + b;
  });
  let minSum = min.reduce((a, b) => {
    return a + b;
  });

  console.log(minSum, maxSum);
}

miniMaxSum([1, 7, 5, 3, 9]);
