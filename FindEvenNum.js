function FindEvenNumbers(val) {
  let even = [];

  for (let i = 0; i < val.length; i++) {
    if (val[i] % 2 === 0) {
      even.push(val[i]);
    }
  }
  return even;
}
console.log(FindEvenNumbers([1, 2, 3, 4, 5, 6]));
