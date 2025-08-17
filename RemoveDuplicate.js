function RemoveDuplicates(val) {
  let unique = [];
  for (let i = 0; i < val.length; i++) {
    if (unique.indexOf(val[i]) === -1) {
      unique.push(val[i]);
    }
  }
  return unique;
}
console.log(RemoveDuplicates([1, 7, 7, 3, 8, 8])); 
