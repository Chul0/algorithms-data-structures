var kLengthApart = function(nums, k) {
    
        
    let newK = k;
    // console.log(newK)

    for( n of nums){
        // console.log(n)
        if(n === 1){
            if(newK < k) return false;
            newK = 0;
        }
        else newK++;
    }
    return true;
    };

let nums = [1,0,0,0,1,0,0,1]
let k = 2
kLengthApart(nums, k)