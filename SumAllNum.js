function SumArray(val) {
  let sum = 0;
  for (let i = 0; i < val.length; i++) {
    sum += val[i];
  }
  return sum;
}
console.log(SumArray([1, 9, 3, 5]));
