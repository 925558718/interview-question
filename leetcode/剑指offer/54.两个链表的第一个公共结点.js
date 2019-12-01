function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    let p1=pHead1;
    let p2=pHead2;
    while (p1!=p2){
        p1=p1?p1.next:pHead1;
        p2=p2?p2.next:pHead2;
    }
    return p1;
}
