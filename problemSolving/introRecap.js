//Write a function which takes in a string and returns counts of each character in the string.

// const charCount = () => {
    // return an object that has each key of alphabet
    // Loop over each character
        //Add 1 to each character
        //If char is something else, don't do anything (e.g. space, period, etc)
    // Store it to an object and return it
// }

// 1
const charCount = (str) => {
    let result = {};
    for(let i =0; i < str.length ; i++){
        let char = str[i].toLowerCase()
        if(result[char] > 0){
            result[char]++;
        }else {
            result[char] = 1;
        }
    }
    return result
}
charCount("Hi my name is chul")

// 2
const charCount = (str) => {
    let result = {};
    for (let char of str) {
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            result[char] = ++result[char] || 1;
        }
    } 
    return result
}
charCount('hey')

// 3

const charCount = (str) => {
    let obj ={};
    for (let char of str) {
        if (isAlphaNumeric(char)){
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj
}

const isAlphaNumeric= (char)=> {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)){
            return false;
        }
    return true;    
}