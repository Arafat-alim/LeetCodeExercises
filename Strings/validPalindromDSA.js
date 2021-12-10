function Palindrom(str) {
  // sanitize the input string
  let s = str.toLowerCase().replace(/[\W_]/g, "");
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

let val = Palindrom("MY name i s s,./_sdasdas");
console.log(val);
