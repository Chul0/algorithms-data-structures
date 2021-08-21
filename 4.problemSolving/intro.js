// What is an Algorithm?

// A process or set of steps to accomplish a certain task
// Almost everything in programming involves algorithm.
// Foundation for being a successful problem solving and developer 





//==============================================================
//Write a function which takes in a string and returns counts of each character in the string.===============================================================

//Problem solving step 1 'UNDERSTAND THE PROBLEM'
//These numbers correspond to "understand-the-problem.png"
// 1. "implement addition"
// 2. ints? floats? what about string for large numbers?
//a float is a data type composed of a number that is not an integer, because it includes a fraction represented in decimal format
// 3. int? float? string?
// 4. 
// 5. 

//Problem solving step 2 'Explore Concrete Examples'



// 1.Start with simple examples
charCount("aaaa"); // ? {a:4}
charCount("hello"); // ? {h:1, e:1, l:2, o:1}

//2.Progress to more complex examples
//"My phone number is 1456456"
// "Hello hi"

//3.Explore Examples with empty inputs
charCount("") // ?

//4.Explore Examples with invalid inputs


//Problem solving step 3 'Break It Down'
// Write pseudo codes
// It's important to communicate with interviewers while taking tech interviews

//write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {
    // do something
    // return an object with key that are lowercase alphanumeric characters in the string 
}


function charCount(str) {
    // make object to return at end
    // loop over string, for each character...
        // if the char is a number/letter ANd key in object, add one to count
        //if the char is a number/letter AND not in object, add it and set value to 1
        //if character is something else (space, period, etc.) don't do anything
    //return object at end
}

// Tech interview, you don't have to finish , it's supposed to be difficult and time consuming, process is what counts.




//Problem Solving step 4 (Solve / Simplify )
//Write a function which takes in a string and returns counts of each charcter in the string.

//Solution 1
function charCount(str) {
    //make object to return at end
    let result = {};
    // loop over string, for each character..
    for(let i =0; i < str.length; i++){
        let char = str[i].toLowerCase()
        // if the char is a number/letter AND is a key in object, add one to count
        if(result[char] > 0) {
            result[char]++; 
            //if result of char is bigger than 0, meaning if result has a key
            //result[char] is same as result.char [],. notation of object! meaning "Access h,e,l,l,o in result"
        } 
        //if the char is a number/letter AND not in object, add it to object and set value to 1
        else {
            result[char] = 1; //if result of char, char is not in the result yet.
        };
    }
        // if character is something else(space, period, etc.) don't do anything
    //return object at end
    return result;
}
charCount("hello")

// Best explanation ! https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11172604#questions/5346514
// Problem Solving step 5 - Look back and refactor
// Can you check the result?
// Can you derive the result differently?
// Can you understand it at a glance?
// Can you use the result or method for some other problem?
// Can you improve the performance of your solution?
// Can you think of other ways to refactor?
// How have other people solved this problem?


// Better use for of, if forOf is used on a string, it gives each character immediately
//You can weed out all the non-alphanumeric characters using regular expression this way

//Solution 2 (better)
function charCount(str) {
    let obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){  
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj
}
charCount("hello")

/*
A regular expression is a sequence of characters that forms a search pattern.

The search pattern can be used for text search and text replace operations.

Regular expressions are useful for searching and replacing strings that match a pattern. They have many useful applications.
Regular expressions are also objects.

You construct a regular expression in one of two ways:
1) let re = /ab+c/;
OR
2) let re = new RegExp('ab+c');

test() Tests for a match in a string. It returns true or false.
let re = /hi/;
let result = re.test('hi John');
console.log(result); // true

https://www.javascripttutorial.net/javascript-regular-expression/
*/



// Solution 3 (Fastest)
function charCount(str) {
    let obj = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && //numeric (0-9)
        !(code > 64 && code < 91) && // upper alphabet(A-Z)
        !(code > 96 && code < 123)){ // lower alphabet(a-z)
            return false;
        }
    return true
}


// Understand the problem - ask questions to interviewers


