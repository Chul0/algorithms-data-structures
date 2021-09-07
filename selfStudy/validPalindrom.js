let isPalindrome = function(s) {
    if(/[a-z]/.test(s)){
        let newS = s.replace(/\W/g, '').toLowerCase();
        console.log(newS)
        let reverseS = newS.toLowerCase().split('').reverse().join('')
        console.log(reverseS)
        if(newS == reverseS){
            return true
        }else{
            return false
        }
    }
    };
let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))


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