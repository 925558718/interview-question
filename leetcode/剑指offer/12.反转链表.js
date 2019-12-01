/*function ReverseList(pHead)
{
    // write code here
    if (!pHead) return null;
    if (!pHead.next) return pHead;
    let newHead=ReverseList(pHead.next);
    pHead.next.next=pHead;
    pHead.next=null;
    return newHead;
}*/
function ReverseList(pHead)
{
    // write code here
    if (!pHead) return null;
    let newHead=null;
    while (pHead){
        let t=pHead.next;
        pHead.next=newHead;
        newHead=pHead;
        pHead=t;
    }
    return newHead
}
