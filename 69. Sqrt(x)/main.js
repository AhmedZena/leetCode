var mySqrt = function (x) {
  if (x === 0) return 0;
  if (x === 1) return 1;
  let arr = [];
  for (let i = 0; i <= x; i++) {
    arr.push(i * i);
    // condition if the last element pushed to the arr larger than x
    // then it means the sqrt of x is i-1
    if (arr[arr.length - 1] > x) {
      return i - 1;
    }
  }
};
console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(9)); // 3
console.log(mySqrt(10)); // 3
console.log(mySqrt(11)); // 3
console.log(mySqrt(12)); // 3
console.log(mySqrt(13)); // 3
console.log(mySqrt(14)); // 3
console.log(mySqrt(15)); // 3
console.log(mySqrt(16)); // 4
