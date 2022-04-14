var longestCommonPrefix = function (strs) {

    // Base condition empty string
   let longestCommonPrefix = "";

   if(!strs.length){
       return longestCommonPrefix;
   }

   // Find the minimum length string from the array
   let minimumLength = strs[0].length;
   for(let i = 1; i < strs.length; i++){
       minimumLength = Math.min(minimumLength, strs[i].length); //(6, 4, 6) -> 4(flow) is the minimumLength
       console.log(minimumLength);
   }

   // Loop for the minimum length. because you want to get common prefix, so start from the minimum length
   for(let i = 0; i < minimumLength; i++){
       // Get the current character from first string
       let current = strs[0][i]; // f,l,o,w
      
        // Check if this character is found in all other strings or not
       for(let j = 0; j < strs.length; j++){
           if (strs[j][i] != current ){ //j is next index, i is 0,1,2~
                //if there is no match, return logestCommonPrefix which is initially an empty string''
               return longestCommonPrefix;
           }
       }
       //else if there is match, put them in longestCommonPrefix
       longestCommonPrefix += current;
   }
   return longestCommonPrefix
   
};

const strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))

const strs2= ["dog","racecar","car"]
console.log(longestCommonPrefix(strs2))