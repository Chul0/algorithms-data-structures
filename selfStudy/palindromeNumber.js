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
                   .split('') // If an empty string ('') is used as the separator, the string is split between each character.
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


var isPalindrome2 = function(x) {
    const reverseNum = x.toString().split('').reverse().join('');
    if(x == reverseNum){
        return true;
    }else {
        return false;
    }
};
console.log(isPalindrome2(11))

//Excellent use of strings and recursion
var isPalindrome3 = function(x) {
    const xToString = x.toString();
    if(xToString.length === 1){
        return true;
    }

    const start = xToString[0];
    const end = xToString[xToString.length -1];

    if(start !== end) {
        return false;
    };
    if(xToString.length === 2) {
        return true;
    };

    const subStr = xToString.substring(1, xToString.length -1);
    return isPalindrome3(subStr) + subStr
};

console.log(isPalindrome3(1211))