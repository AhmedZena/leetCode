//my solution
var lengthOfLastWord = function (s) {
  let arr = s.split(" ");
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== "") {
      return arr[i].length;
    }
  }
};

// lengthOfLastWord("Hello World");
// lengthOfLastWord("Hello World ");
// lengthOfLastWord("Hello World  ");
// lengthOfLastWord("Hello World   ");
// lengthOfLastWord("Hello World    ");

// lengthOfLastWord("   fly me   to   the moon  ");

console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); //6
console.log("------------------end of the first solution------------------");
//anotheer solution

var lengthOfLastWord2 = function (s) {
  return s.trim().split(" ").pop().length;
};
// var lengthOfLastWord2 = function (s) {
//   return s.trim().split(" ").pop().length;
// }

console.log(lengthOfLastWord2("   fly me   to   the moon  "));
console.log(lengthOfLastWord2("luffy is still joyboy"));
console.log("------------------end of the second solution------------------");
//another solution that i found on the leetcode website
var lengthOfLastWord3 = function (s) {
  var i = s.length - 1;
  var length = 0;
  while (i >= 0) {
    //in the top while loop we move from the back until we get a character
    //which isn't a space
    if (s[i] != " ") {
      //at this point we have the last letter of the last word.
      // length += 1 until we hit another space or the string is done
      while (i >= 0 && s[i] != " ") {
        length += 1;
        i -= 1;
      }
      return length;
    }
    i -= 1;
  }
};

console.log(lengthOfLastWord3("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord3("luffy is still joyboy")); //6
console.log("------------------end of the third solution------------------");
//another solution that i found on the leetcode website
var lengthOfLastWord4 = function (s) {
  return (s.match(/(\w+)\s*$/) || [, ""])[1].length;
};

console.log(lengthOfLastWord4("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord4("luffy is still joyboy")); //6
console.log("------------------end of the fourth solution------------------");
