let mergeTwoLists = function(l1, l2) {
    if(l1 == null) return l2
    if(l2 == null) return l1

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    l2.next = mergeTwoLists(l1, l2.next);
    return l2
    
};

let l1 = [1,2,4]
let l2 = [1, 2, 6, 4]
console.log(mergeTwoLists(l1, l2))