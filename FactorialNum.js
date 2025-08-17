function Factorial(val) {
  let result = 1;
  for (let i = 1; i <= val; i++) {
    result = result * i;
  }
  return result;
}
console.log(Factorial(4)); 
