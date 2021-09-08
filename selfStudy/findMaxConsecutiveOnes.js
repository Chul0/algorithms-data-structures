/*   
Given a binary array nums, return the maximum number of consecutive 1's in the array.
Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
*/

//    loop through each intext on nums
//     see it i is consecutive
//     if it is consecutive, store it and count it
//     return it
    
let findMaxConsecutiveOnes = function(nums){
    let result = {};
   for(let i = 0; i < nums.length; i++){
           const currentIndex = nums[i];
           const nextIndex = nums[i + 1];
           console.log(currentIndex)
           console.log(nextIndex)
           if(currentIndex == nextIndex){
                if(result[currentIndex]){
                    result[currentIndex] ++;
                }else {
                    result[currentIndex] = 1;
                } 
           }
        }
        return result
   
}

let nums = [1,1,0,1,1,1,1,1,1,0,1,1,1,1];
console.log(findMaxConsecutiveOnes(nums))