/**
 *
 * @param {Int32Array} scores
 * @returns {Int32Array} [0]: most point records, [1]: least points records
 */
const breakingRecords = (scores /*integer array*/) => {
  // set first index as starting point for highest and lowest record
  let lowestScore;
  let highScore;
  let currentScore;
  let records = [];
  let highs = 0;
  let lows = 0;

  for (let index = 0; index < scores.length; index++) {
    currentScore = scores.at(index);
    if (index === 0) {
      highScore = currentScore;
      lowestScore = currentScore;
    }
    if (currentScore < lowestScore && index !== 0) {
      lowestScore = currentScore;
      lows++;
      records[1] = lows;
    } else if (currentScore > highScore && index !== 0) {
      highScore = currentScore;
      highs++;
      records[0] = highs;
    }
    if (lows == 0) {
      records[1] = 0
    }
    if (highs == 0) {
      records[0] = 0
    }
  }
  console.log(records);
  // If next index is higher than previous high add +1 to return array[0]
  // set that value as next high to surpass to break "most points record"
  // If next index is lower than previous low add +1 to return array[1]
  // Set that value as new lowest to break "least points record"

  // return an array of the number of times she broke her records
  // index [0] most points records
  // index [1] least points records
};

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
