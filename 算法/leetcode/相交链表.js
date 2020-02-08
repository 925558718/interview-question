var getIntersectionNode = function(headA, headB) {
    let p1=headA;
    let p2=headB;
    while(p1!=p2){
        p1=p1?p1.next:headA;
        p2=p2?p2.next:headB;
    }
    return p1;
};