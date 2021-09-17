/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
Example 4:

Input: nums = [1,3,5,6], target = 0
Output: 0
Example 5:

Input: nums = [1], target = 0
Output: 0
*/

let searchInsert = function(nums, target) {
    if(nums.includes(target)) return nums.indexOf(target)

    let i = 0;
    while (target >= nums[i]){
        i++;
    }
    return i
};

let nums = [1,3,5,6]
let target = 5
console.log(searchInsert(nums, target))

let nums2 = [1,3,5,6]
let target2 = 2
console.log(searchInsert(nums2, target2))

let nums3 = [1,3,5,6]
let target3 = 7
console.log(searchInsert(nums3, target3))

let nums4 = [1,3,5,6]
let target4 = 0
console.log(searchInsert(nums4, target4))

let nums5 = [1]
let target5 = 0
console.log(searchInsert(nums5, target5))