//67. Add Binary

var addBinary = function (a, b) {
  let carry = 0;
  let sum = [];
  let result = function (a, b) {
    for (let i = a.length - 1; i >= 0; i--) {
      if (a[i] == 1 && b[i] == 1 && carry == 0) {
        sum.unshift("0");
        carry = 1;
      } else if (a[i] == 1 && b[i] == 1 && carry == 1) {
        sum.unshift("1");
        carry = 1;
      } else if (
        (a[i] == 0 && b[i] == 1 && carry == 0) ||
        (a[i] == 1 && b[i] == 0 && carry == 0)
      ) {
        sum.unshift("1");
        carry = 0;
      } else if (
        (a[i] == 1 && b[i] == 0 && carry == 1) ||
        (a[i] == 0 && b[i] == 1 && carry == 1)
      ) {
        sum.unshift("0");
        carry = 1;
      } else if (a[i] == 0 && b[i] == 0 && carry == 0) {
        sum.unshift("0");
        carry = 0;
      } else if (a[i] == 0 && b[i] == 0 && carry == 1) {
        sum.unshift("1");
        carry = 0;
      }
    }
    if (carry == 1) {
      sum.unshift(carry);
    }
  };

  //that see if the length of the two strings are equal or not
  if (a.length === b.length) {
    result(a, b);
  } else if (a.length > b.length) {
    // console.log("a is longer");
    let x = a.length - b.length;
    let arrx = [];
    for (j = 0; j < x; j++) {
      arrx.unshift("0");
    }
    result(a, arrx.concat(b).join(""));
  } else if (a.length < b.length) {
    // console.log("b is longer");
    let x = b.length - a.length;
    let arrx = [];
    for (j = 0; j < x; j++) {
      arrx.unshift("0");
    }
    // console.log(arrx.concat(a).join(""));
    result(arrx.concat(a).join(""), b);
  }

  //that see if the a and b are equal zero if that is true then return zero else return the sum
  if (a == "0" && b == "0") {
    return "0";
  } else {
    return sum.join("");
    // return `the sem of ${a} and ${b} is ${sum.join("")}`;
  }
};

console.log(addBinary("11101011", "1")); // 10101111 = 77
console.log(addBinary("1010", "1011")); // 10101 = 21
console.log(addBinary("0", "0")); // 0 = 0
console.log(addBinary("0", "1")); // 1 = 1
console.log(addBinary("1", "11")); // 100 = 4
console.log(addBinary("1", "111")); // 101 = 5
console.log(addBinary("100", "110010")); // 10101111 = 77

// another sol
console.log("------------------another sol------------------------------");
var addBinary2 = (a, b) => (BigInt(`0B${a}`) + BigInt(`0B${b}`)).toString(2);
console.log(addBinary2("11101011", "1"));
console.log(addBinary2("1010", "1011"));
console.log(addBinary2("0", "0"));
console.log(addBinary2("0", "1"));
console.log(addBinary2("1", "11"));
console.log(addBinary2("1", "111"));
console.log(addBinary2("100", "110010"));
