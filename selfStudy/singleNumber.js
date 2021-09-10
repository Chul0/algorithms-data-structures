let singleNumber = (num) => {
    // let findDuplicate =  [...new Set(num)]
    // console.log(findDuplicate)
    // for(let i = 0; i < nums.length; i++){
    //     if(findDuplicate[0] == nums[i] && findDuplicate[0] != nums[i + 1]){
    //         return 
    //     }
    // }
    let findDuplicate = num => num.filter((item, index) => num.indexOf(item) !== index);
    let duplicateElem = findDuplicate(num)
    console.log(duplicateElem)
    for(let i = 0; i < num.length; i++){
        for(let j = 0; j < duplicateElem.length; j++){
            if(num[i] == duplicateElem[j]){
               num = num.filter(h => h !== num[i])
            
            }
        }
    }
    return num[0]
};

let num = [2,2,1];
console.log(singleNumber(num))