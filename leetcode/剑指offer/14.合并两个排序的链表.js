function ListNode(val) {
    this.val=val;
    this.next=null;
}
function Merge(pHead1, pHead2)
{
    // write code here
    let dummy=new ListNode();
    let node=dummy;
    while (pHead1&&pHead2){
        if (pHead1.val<pHead2.val){
            node.next=new ListNode(pHead1.val);
            pHead1=pHead1.next;
        }
        else {
            node.next=new ListNode(pHead2.val);
            pHead2=pHead2.next;
        }
        node=node.next;
    }
    node.next=pHead1?pHead1:pHead2;
    return dummy.next;
}
