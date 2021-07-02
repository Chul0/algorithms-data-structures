// Big O Definition (TIME COMPLEXITY)
// TIME COMPLEXITY
// How can we analyze the runtime of an algorithm as the size of the inputs increases?

/*
f(n) could be linear(f(n) = n)
f(n) could be quadratic(f(n) = n2)
f(n) could be constant(f(n) = 1)
f(n) could be something entirely different!


f(n) could be linear (f(n) = n) f-function | (n)-input number | =n - output number
*/

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i;
    }
    return total
}
// O(n) Number of operations is bounded by a multiple of n(say, 10n), 
// runtime grows as n grows

function addUpTo2(n) {
    return n * (n + 1) / 2;
}

// O(1) (reads "Big O of one" )This runs always 3 operations, 
// roughly always constant 




function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye!")
}
console.log(countUpAndDown(10));

// O(n) reads"Big O of N" it grows as n grows



function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
console.log(printAllPairs(2));
// O(n2) "O of n squared", O(n) is nested in another O(n)
// Quadratic, Runtime grows at the rate of n2(n square)


/* Time-wise 
O(1) -> O(n) -> O(n2)

Big O Shorthands
1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing element in an array(by index) or object(by key) is constant
4.In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

*/


function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        // Math.max(5, n) either 5 or n - whichever is lager
        console.log(i)
    } 
}
logAtLeast5(10)
// O(n) N grows operation grows too

function logAtMost5(n) {
    for (let i = 1; i <= Math.min(5, n); i++){
        // Math.min(5, n) either 5 or n - whichever is smaller
        console.log(i);
    }
}
logAtMost5(6)
//O(1), if n grows the output is constant. It always run below 5 times..