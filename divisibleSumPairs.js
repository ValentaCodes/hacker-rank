/**
 * @param {number} n - length of the array
 * @param {number} k - the divisor
 * @param {Int32Array} ar - an array of integers
 *
 * @returns {number} r - return value
 */

const divisibleSumPair = (n, k, ar) => {
  let r = 0;
  for (let i = 0; i < n; i++) {
    let v1 = ar[i];
    for (let j = i + 1; j < n; j++) {
      let v2 = ar[j];
      if ((v1 + v2) % k == 0) {
        r++;
      }
    }
  }
  console.log(r)
  return r
};

divisibleSumPair(6, 3, [1, 3, 2, 6, 1, 2]);
