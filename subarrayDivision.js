/**
* @description Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.

* @param {Int32Array} s - squares: an array of integers on each chocolate square
* @param {Int32Array} d - date: birth day
* @param {Int32Array} m - month: birth month
* @returns {Int} number of ways the bar can be divided 
* @example subarrayDivision([1,2,1,3,2], 3, 2) returns 
 */

const subarrayDivision = (s, d, m) => {
  let n = 0;
  let sum = 0;
  let c = 0;
  if (m == 1 && s.length == 1) {
    return m;
  }
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let h = s[j];
      c++;
      sum += h;
      if (c == m) {
        if (sum == d) {
          n++;
          c = 0;
        } else if (i === s.length - m) {
          return n;
        }
        c = 0;
        sum = 0;
        break;
      }
    }
  }
  return n;
};

// find segments where the SUM equals the birthday with the length equaling his birth month
// so if the birth MONTH is 2 we can only add two numbers together to achieve the sum of his birth DAY
// If the numbers in sequence don't match this criteria or don't equal the sum then return false || -1
// Return an integer representing how many ways the bar can be divided

subarrayDivision([4, 5, 4, 2, 4, 5, 2, 3, 2, 1, 1, 5, 4], 15, 4);
