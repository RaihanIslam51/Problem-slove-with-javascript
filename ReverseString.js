function ReverseString(val) {
  let reverse = "";
  for (let i = val.length - 1; i >= 0; i--) {
    reverse += val[i];
  }
  return reverse;
}
console.log(ReverseString("hello"))
