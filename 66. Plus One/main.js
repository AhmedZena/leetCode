var plusOne = function (digits) {
  let lastIndex = digits[digits.length - 1];
  //   good solution
  if (lastIndex < 9) {
    digits[digits.length - 1] = lastIndex + 1;
    return digits;
  } else {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
      let sum = digits[i] + carry;
      if (sum > 9) {
        digits[i] = 0;
        carry = 1;
      } else {
        digits[i] = sum;
        carry = 0;
      }
    }
    if (carry === 1) {
      digits.unshift(1);
    }
    return digits;
  }

  //bad solution

  //   let lastIndex = digits[digits.length - 1];
  //   if (lastIndex < 9) {
  //     digits[digits.length - 1] = lastIndex + 1;
  //     return digits;
  //   } else {
  //     let lastIndexFinal = (lastIndex + 1).toString().split("");

  //     let digitsFinal = digits.slice(0, digits.length - 1);
  //     return [...digitsFinal, ...lastIndexFinal];
  //   }

  //another solution but not dynamic
  //   if (lastIndex == 9) {
  //     digits[lastIndex] = digits[lastIndex] + 1;
  //   } else {

  //   if (digits.length < 16) {
  //     return (parseInt(digits.join("")) + 1).toString().split("");
  //   } else if (digits.length < 32) {
  //     let arr1 = digits.slice(0, 15).join("").split("");
  //     let arr2 = digits.slice(15);
  //     let arr3 = (parseInt(arr2.join("")) + 1).toString().split("");
  //     return [...arr1, ...arr3];
  //   } else if (digits.length < 48) {
  //     let arr1 = digits.slice(0, 15).join("").split("");
  //     let arr2 = digits.slice(15, 31).join("").split("");
  //     let arr3 = digits.slice(31);
  //     let arr4 = (parseInt(arr3.join("")) + 1).toString().split("");
  //     return [...arr1, ...arr2, ...arr4];
  //   } else if (digits.length < 64) {
  //     let arr1 = digits.slice(0, 15).join("").split("");
  //     let arr2 = digits.slice(15, 31).join("").split("");
  //     let arr3 = digits.slice(31, 47).join("").split("");
  //     let arr4 = digits.slice(47);
  //     let arr5 = (parseInt(arr4.join("")) + 1).toString().split("");
  //     return [...arr1, ...arr2, ...arr3, ...arr5];
  //   } else if (digits.length < 80) {
  //     let arr1 = digits.slice(0, 15).join("").split("");
  //     let arr2 = digits.slice(15, 31).join("").split("");
  //     let arr3 = digits.slice(31, 47).join("").split("");
  //     let arr4 = digits.slice(47, 63).join("").split("");
  //     let arr5 = digits.slice(63);
  //     let arr6 = (parseInt(arr5.join("")) + 1).toString().split("");
  //     return [...arr1, ...arr2, ...arr3, ...arr4, ...arr6];
  //   }
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([0]));
console.log(plusOne([9]));
console.log(plusOne([9, 9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 0, 0, 0]));
console.log(
  plusOne([
    7, 2, 8, 5, 0, 9, 1, 2, 9, 5, 3, 6, 6, 7, 3, 2, 8, 4, 3, 7, 9, 5, 7, 7, 4,
    7, 4, 9, 4, 7, 0, 1, 1, 1, 7, 4, 0, 0, 6,
  ])
);

console.log(
  plusOne([
    9, 8, 2, 1, 3, 3, 1, 8, 1, 4, 4, 7, 2, 7, 2, 0, 5, 6, 8, 9, 7, 7, 4, 3,
  ])
);
