let isPalindrome = function(s) {
        let removeNonAlpha = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
        // remove non-alphanumeric chars from s and covert it to lower case.
        let reverse = removeNonAlpha.split('').reverse().join('')
        // reverse it
        if(removeNonAlpha == reverse){
            // compare 
            return true
        }else{
            return false
        }
    
    };
let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))


// The following is the/a correct regex to strip non-alphanumeric chars from an input string:
input.replace(/\W/g, '')

// Note that \W is the equivalent of [^0-9a-zA-Z_] - it includes the underscore character. To also remove underscores use e.g.:
input.replace(/[^0-9a-z]/gi, '')