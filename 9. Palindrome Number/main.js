//
// x = 232 ;
// var isPalindrome = function(x) {
//  return  (x.toString() === x.toString().split('').reverse().join(''));
// };
// isPalindrome("232");
// console.log(isPalindrome(232));
// console.log(parseInt(temp/10));

// let isPalindrome = function (x) {
//   let reversedNum = 0;
//   let tmp = x;
//   while (tmp > 0) {
//     lastDigit = Math.floor(tmp % 10);
//     reversedNum = Math.floor(reversedNum * 10 + lastDigit);
//     tmp = Math.floor(tmp / 10);
//   }
//   return reversedNum === x;
// };
// }
// isPalindrome(2231);

// another solution
var isPalindrome = function (x) {
  if (x < 0) return false;
  let rev = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10)) rev = rev * 10 + (i % 10);
  return rev === x;
};

console.log(isPalindrome(2231));
