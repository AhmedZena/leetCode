// var I = 1;
// var V = 5;
// var X = 10;
// var L = 50;
// var C = 100;
// var D = 500;
// var M = 1000;
// // var s = "III";
// // console.log(  s.split(""))

// var romanToInt = function (s) {
//   var S = s.split("");
//   var result = [];
//   for (var i = 0; i < S.length; i++) {
//     if (S[i] === "I") {
//       result.push(I);
//       if (result === S) return S.length * I;
//     }
//   }
// };

// console.log(romanToInt("II"));

// const numbers1 = [1, 2, 3, 4, 5];
// const numbers2 = [...numbers1, 1, 2, 6, 7, 8];
// console.log(numbers2);

// var I = 1;
// var V = 5;
// var X = 10;
// var L = 50;
// var C = 100;
// var D = 500;
// var M = 1000;

// var romanToInt = function (s) {
//   let arr = s.split("");
//   let sum = 0;
//   // console.log(arr)
//   // console.log(sum)

//   for (let i = 0; i <= arr.length; i++) {
//     // console.log(arr[i])
//     if (arr[i] == "I") {
//       console.log(`${i} hi i am  i and my value is ${arr[i]}`);
//       sum += 1;
//       console.log(`${sum} hi i am sum `);
//       console.log(`${arr} hi i am the array `);

//       //   arr.shift();
//       console.log(`${arr} hi i am the array after shift`);
//     } else {
//       console.log("error");
//     }

//     console.log(` ${sum} i am the total sum `);
//   }

//   console.log(sum);
// };

// romanToInt("IIIVVV");

// var romanToInt = function (s) {
//   let arr = s.split("");
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "I") {
//       sum += 1;
//     } else if (arr[i] == "V") {
//       sum += 5;
//     } else if (arr[i] == "X") {
//       sum += 10;
//     } else if (arr[i] == "L") {
//       sum += 50;
//     } else if (arr[i] == "C") {
//       sum += 100;
//     } else if (arr[i] == "D") {
//       sum += 500;
//     } else if (arr[i] == "M") {
//       sum += 1000;
//     } else {
//       console.log(`error in the ${i} i `);
//     }
//   }

//   console.log(`the roman num is "${s}"
//     the value of it is (${sum})`);
// };

// romanToInt("IIIVVV");
// romanToInt("LVIII");
// romanToInt("MCMXCIV");

var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;

// var romanToInt = function (s) {
//   let arr = s.split("");
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "I") {
//       if (arr[i + 1] == "V") {
//         sum += 4;
//       } else if (arr[i + 1] == "X") {
//         sum += 9;
//       } else {
//         sum += 1;
//       }
//     } else if (arr[i] == "V" && arr[i - 1] != "I") {
//       sum += 5;
//     } else if (
//       arr[i] == "X" &&
//       arr[i + 1] != "C" &&
//       arr[i - 1] != "I" &&
//       arr[i + 1] != "L"
//     ) {
//       sum += 10;
//     } else if (arr[i] == "L") {
//       if (arr[i - 1] == "X") {
//         sum += 40;
//       } else {
//         sum += 50;
//       }
//     } else if (arr[i] == "C") {
//       if (arr[i + 1] == "M") {
//         sum += 900;
//       } else if (arr[i + 1] == "D") {
//         sum += 400;
//       } else if (arr[i - 1] == "X") {
//         sum += 90;
//       } else {
//         sum += 100;
//       }
//     } else if (arr[i] == "D" && arr[i - 1] != "C") {
//       sum += 500;
//     } else if (arr[i] == "M" && arr[i - 1] != "C") {
//       sum += 1000;
//     }
//   }

//   return sum;
// };

var romanToInt = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "I") {
      if (s[i + 1] == "V") {
        sum += 4;
      } else if (s[i + 1] == "X") {
        sum += 9;
      } else {
        sum += 1;
      }
    } else if (s[i] == "V" && s[i - 1] != "I") {
      sum += 5;
    } else if (
      s[i] == "X" &&
      s[i + 1] != "C" &&
      s[i - 1] != "I" &&
      s[i + 1] != "L"
    ) {
      sum += 10;
    } else if (s[i] == "L") {
      if (s[i - 1] == "X") {
        sum += 40;
      } else {
        sum += 50;
      }
    } else if (s[i] == "C") {
      if (s[i + 1] == "M") {
        sum += 900;
      } else if (s[i + 1] == "D") {
        sum += 400;
      } else if (s[i - 1] == "X") {
        sum += 90;
      } else {
        sum += 100;
      }
    } else if (s[i] == "D" && s[i - 1] != "C") {
      sum += 500;
    } else if (s[i] == "M" && s[i - 1] != "C") {
      sum += 1000;
    }
  }

  return sum;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
console.log(romanToInt("IX")); // 9
console.log(romanToInt("XL")); // 40

var romanToInteger = function (s) {
  let symbols = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let value = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = symbols[s[i]],
      next = symbols[s[i + 1]];
    if (curr < next) value -= curr;
    else value += curr;
  }
  return value;
};

console.log(romanToInteger("III")); // 3
console.log(romanToInteger("LVIII")); // 58
console.log(romanToInteger("MCMXCIV")); // 1994
console.log(romanToInteger("IX")); // 9
