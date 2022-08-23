/* 
 
 Problem Statement
​
This is another article in the series leetcode problem solutions and this article is a solution to leetcode 1 two sum problem.
Once you have a good understanding of two sum problem, it should help you solve advanced level problems like three sum which in some ways a continuation of the two sum problem.
Consider you are given an array of integers and a target sum, return indices of two numbers in the array such that they add  up to the given target. You may assume that each input would have exactly one solution. Also, you cannot use the same element twice. You are allowed to return the  answer in any order.

Example
Example 1:
Input: nums = [7,2,13,11], target = 9
Output: [0,1]

Example 2:
Input: nums = [7,3,5], target = 8
Output: [1,2]
 
 */

nums = [3, 2, 4];
target = 6;


//solution (A) using Brute Force 
//solution 1
var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum(nums, target));

    //solution 2

    var twoSum2 = function (nums, target) {
      for (i = 0; i < nums.length; i++) {
        for (j = i+1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target ) {
            return [i, j];
          }
        }
      }
    };
    console.log(twoSum2(nums, target));


//solution (B) using Hash Table














