// ! Doing using methods of js
let str = "abba"; //want output cba
// convert above string into an array
let strToArr = str.split("");
// now using array method to reverse the elements
let revArr = strToArr.reverse();
// now move back array to the string
let newStr = revArr.join("");
// now comparing the str and newStr
if (str === newStr) {
  console.log("Valid Palindrome");
} else {
  console.log("Not a Palindrom");
}
