function Palindrome(val) {
  let reverse = "";
  for (let i = val.length - 1; i >= 0; i--) {
    reverse += val[i];
  }
  return val === reverse;
}
console.log(Palindrome("madam"));
console.log(Palindrome("hello"));
