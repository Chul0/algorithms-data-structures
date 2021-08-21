// Frequency Counters

/*
This pattern uses objects or sets to collect values/frequencies of values
This can often avoid the need for nested loops or O(N^2) operations with arrays / strings
*/


// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)


// Naive Solution 1 (Quadratic Time Complexity : N^2)
const same = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // what are the indices 1^2, 2^2, 3^2, 2^2 in arr2?
        if(correctIndex === -1) {
            // if it's -1, meaning it's not in the arr
            return false;
        }
        // console.log(correctIndex);
        // console.log(arr1);
        console.log(arr2);
        arr2.splice(correctIndex, 1)
        // You can see how it shrinks in each loop
    }
    return true;
}

console.log(same([1,2,3,2], [9,1,4,4])) //true
console.log(same([1,2,3], [9,1,4,4])) //false


/*
Syntax
splice(start, deleteCount, item1, item2, itemN)
Operation ** Exponentiation
*/


////////////////////////////////////////////////////

// Refactored Solution 2 (Linear time complexity: O(n)) better than N^2

const same2 = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {}
    for(let val of arr1){ //loop each element of arr1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
        console.log(val);
    }
    for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1) { //for in :loop each key:value of frequencyCounter1 and return value
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
console.log(same2([1,2,3,2,5], [9,1,4,4,25]))

// NOTE
// for of statement loops through the values of an iterable object.

// Short version of if ... else 
// (frequencyCounter1[val] || 0) + 1

// Basically same as this
// if(frequencyCounter1[val]){
//     frequencyCounter1[val] += 1;
// } else {
//    frequencyCounter1[val] = 1;
// }


/*
[ANAGRAMS]
 Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
*/

//My solution
const validAnagram = (str1, str2) => {
    let splitStr = str1.split("")
    // console.log(splitStr);
    let reverseStr = splitStr.reverse()
    // console.log(reverseStr);
    let joinStr = reverseStr.join("")
    // console.log(joinStr);
    if(joinStr === str2){
        return true
    }else{
        return false
    }
  }
console.log(validAnagram("apple", "elpp"));
console.log(validAnagram("park", "krap"));
