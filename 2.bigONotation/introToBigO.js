


const addUpTo = (n) => {
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i;
    }
    return total
}
console.log(addUpTo(3));
// this is in a loop so if N is 5, it will run + 5 times, 1000 -> 1000times
// Many operations here +=, i++(it increases at N grows), <=, and so on...
// As n grows the time grows proportionally = time is pretty constant



const addUpTo2 = (n) => {
    return n * (n + 1) / 2;
}
console.log(addUpTo2(2));
// there are three operations here (*, +, /)

// addUpTo2 is faster than addUpTo => addUpTo2 is more efficient 


