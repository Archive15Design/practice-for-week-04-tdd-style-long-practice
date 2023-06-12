function returnsThree() {
  return 3;
}

function reciprocal(n, ...otherNums) {
  if (n < 1 || n > 100000) {
    throw new RangeError('Please provide positive integer');
  }
  else if (otherNums.length < 1){
    return 1 / n;
  }

  otherNums.unshift(n);
  if (otherNums.length > 100000){
    throw new RangeError('Input array is too large');
  };
  for (const num of otherNums){
    if (num < 1){
      throw new RangeError(`This input (${num}) is not a positive integer`);
    }
  }
  const output = otherNums.map((ele) => 1 / ele);
  return output;
}

let testArray = [];
for (let i = 1; i < 200000; i++){
  testArray.push(i);
}
const output = reciprocal(...testArray);
console.log(output);

module.exports = {
  returnsThree,
  reciprocal
};
