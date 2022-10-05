var reorderedPowerOf2 = function (n) {
  let x;
  for (let i = 0; i < 30; i++) {
    // let nLength = n.toString().length;
    // if (Math.pow(2, i) === n) {
    //   return true;
    // } else if (n.toString().split("")[nLength - 1] !== "0") {
    //   if (
    //     parseInt(n.toString().split("").reverse().join("")) === Math.pow(2, i)
    //   ) {
    //     return true;
    //   } else if (
    //     parseInt(n.toString().split("").sort().join("")) === Math.pow(2, i)
    //   ) {
    //     return true;
    //   } else if (
    //     parseInt(n.toString().split("").sort().reverse().join("")) ===
    //     Math.pow(2, i)
    //   ) {
    //     return true;
    //   } else
    // console.log(`i = ${i}`);
    // console.log(n.toString().split("").sort().join(""));
    // console.log(Math.pow(2, i).toString().split("").sort().join(""));
    //     if (
    //       n.toString().split("").sort().join("") ===
    //       Math.pow(2, i).toString().split("").sort().join("")
    //     ) {
    //       x = true;
    //     } else {
    //       x = false;
    //     }
    //     return x;
    //   }

    //   let tmp = n.toString().split("").at(-1);
    //   console.log(tmp);
    //   console.log(tmp);
    //   return `last digit is ${tmp}`;
    //   n.toString().split("");
    //   return ` last digit is ${tmp}
    //  c is ${c}`;
    //   let c = n.toString().split("").slice(0, -1);
    //   c.unshift(tmp);
    //   console.log(+c.join(""));
    //   return n.toString().split("").slice(0, -1).push(tmp);
    //   let c = n
    //     .toString()
    //     .split("")
    //     .slice(0, -1)
    //     .unshift(n.toString().split("").at(-1));
    //   console.log(c);
    let res = n.toString().split("").sort().join("");
    // console.log(res);
    for (let i = 0; i < 30; i++)
      //   console.log((1 << i).toString().split("").sort().join(""));
      if ((1 << i).toString().split("").sort().join("") === res) return true;
    return false;
  }
};

// console.log(reorderedPowerOf2(1));
// console.log(reorderedPowerOf2(10));
// console.log(reorderedPowerOf2(16));
// console.log(reorderedPowerOf2(24));
// console.log(reorderedPowerOf2(46));
// console.log(reorderedPowerOf2(218));
console.log(reorderedPowerOf2(125));
console.log(reorderedPowerOf2(4960));
console.log(
  "--------------------second solution-------------------------------"
);
var reorderedPowerOf2Second = function (n) {
  for (let i = 0; i < 30; i++) {
    let res = n.toString().split("").sort().join("");
    // console.log(res);
    for (let i = 0; i < 30; i++)
      //   console.log((1 << i).toString().split("").sort().join(""));
      if ((1 << i).toString().split("").sort().join("") === res) return true;
    return false;
  }
};
console.log(reorderedPowerOf2Second(1));
console.log(reorderedPowerOf2Second(10));
console.log(reorderedPowerOf2Second(16));
console.log(reorderedPowerOf2Second(24));
console.log(reorderedPowerOf2Second(46));
console.log(reorderedPowerOf2Second(218));
console.log(reorderedPowerOf2Second(125));
console.log(reorderedPowerOf2Second(4960));
