var removeElement = function (nums, val) {
  nums.forEach((element) => {
    if (element === val) {
      nums[nums.indexOf(element)] = "_";
    }
  });

  //   console.log(nums);

  //sort nums
  nums.sort();
  //   console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === "_") {
      return i;
    }
  }
};

removeElement([3, 2, 2, 3], 3);
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
