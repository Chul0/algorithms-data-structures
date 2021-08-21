/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false
*/



let isPalindrome = function(x) {
    let reverseX = x.toString() //covert x to a string
                   .split('') 
                   .reverse()
                   .join('') //it has to remain as a string otherwise -121 won't be 121-
    console.log(reverseX)
    if(x == reverseX){
        return true
    }else{
        return false
    }
};
console.log(isPalindrome(121))