function ListNode(val) {
    this.val=val;
    this.next=null;
}
var mergeTwoLists = function(l1, l2) {
    let dummy=new ListNode();
    let cur=dummy;
    while (l1&&l2){
        if (l1.val<l2.val){
            cur.next=new ListNode(l1.val);
            l1=l1.next;
        }else{
            cur.next=new ListNode(l2.val);
            l2=l2.next;
        }
        cur=cur.next;
    }
    cur.next=l1?l1:l2;
    return dummy.next;
};
