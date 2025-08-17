function findMaxNum(val) {
  let max = val[0];

  for (let i = 1; i < val.length; i++) {
    if (val[i] > max) {
      max = val[i];
    }
  }
  return max;
}
console.log(findMaxNum([4, 1, 8, 2]));
