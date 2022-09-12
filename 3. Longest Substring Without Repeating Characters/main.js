//solution to get the first longest substring
// var lengthOfLongestSubstring = function (s) {
//   let arr1 = s.split("");
//   let arr2 = [];
//   main: for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       arr2.shift();
//     } else {
//       arr2.push(arr1[i]);
//     }
//     //     arr2.push(arr1[i]);
//   }

//   return arr2.length;
// };

//another solution to get the first longest substring in all string
// var lengthOfLongestSubstring = function (s) {
//   let arr1 = s.split("");
//   let arr2 = [];
//   let max = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       arr2.shift();
//     } else {
//       arr2.push(arr1[i]);
//     }
//     max = Math.max(max, arr2.length);
//   }
//   return max;
// };

//aonother sol to get the longest substring from the given string
//weird sol by higher function reduce

// function lengthOfLongestSubstring(s) {
//   const map = {};
//   var left = 0;

//   return s.split("").reduce((max, v, i) => {
//     left = map[v] >= left ? map[v] + 1 : left;
//     map[v] = i;
//     return Math.max(max, i - left + 1);
//   }, 0);
// }

//another solution
var lengthOfLongestSubstring = function (s) {
  // keeps track of the most recent index of each letter.
  const seen = new Map();
  //the value of tht map in the beginning
  //   console.log(seen);
  // keeps track of the starting index of the current substring.
  let start = 0;
  // keeps track of the maximum substring length.
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    // if the current char was seen, move the start to (1 + the last index of this char)
    // max prevents moving backward, 'start' can only move forward
    if (seen.has(s[i])) {
      //   console.log(seen);
      start = Math.max(seen.get(s[i]) + 1, start);
    }
    seen.set(s[i], i);
    // maximum of the current substring length and maxLen
    maxLen = Math.max(i - start + 1, maxLen);
  }
  console.log(seen);

  return maxLen;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring(" "));
// console.log(lengthOfLongestSubstring(""));
// console.log(lengthOfLongestSubstring("au"));
// console.log(lengthOfLongestSubstring("aab"));
// console.log(lengthOfLongestSubstring("dvdf"));
