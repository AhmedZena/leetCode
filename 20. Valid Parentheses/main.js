// var isValid = function (s) {
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(" && s[i + 1] === ")") {
//       return true;
//     } else if (s[i] === "{" && s[i + 1] === "}") {
//       return true;
//       //   console.log(true);
//     } else if (s[i] === "[" && s[i + 1] === "]") {
//       return true;
//       //   console.log(true);
//     } else {
//       return false;
//       //   console.log(false);
//     }
//   }

// };

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("([)]"));
// console.log(isValid("{[]}"));
// console.log(isValid("]"));
// console.log(isValid("["));

var isValid = function (s) {
  let regexp = /\(\)|\[\]|\{\}/g;
  while (regexp.test(s)) {
    // console.log(s);
    s = s.replace(regexp, "");
  }
  return s.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("]")); // false
console.log(isValid("[")); // false
