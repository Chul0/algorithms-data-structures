// SPACE COMPLEXITY
// How much additional memory do we need to allocate in order to run the code in our algorithm?

// Rules of Thumbs
// 1.Most primitives ( booleans, numbers, undefined, null) are constant space
// 2. Strings require O(n) space (where n is the string length)
// 3. Reference types are generally O(n), where n is the length (for arrays) or the number of keys(for objects)


function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
let arr1 = [1,3,4,6]
sum(arr1)

// O(1) space! 
// No matter the size of the input, the space is always the same. There are only two variables which don't change


function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i])
    }
    return newArr
}
double([1,2,3])
// O(n) space! 
// Proportionate to n numbers(newArr)