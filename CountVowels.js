function CountVowels(val) {
  let vowel = "aeiou";
  let count = 0;

  for (let i = 0; i < val.length; i++) {
    let char = val[i].toLowerCase();
    if (vowel.indexOf(char) !== -1) {
      count++;
    }
  }
  return count;
}
console.log(CountVowels("programming"));
