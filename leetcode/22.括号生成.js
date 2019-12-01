function ListNode(val) {
    this.val=val;
    this.next=null;
}
var swapPairs = function(head) {
    let dummy=new ListNode();
    dummy.next=head;
    let pre=dummy;
    let cur=dummy.next;
    while (cur&&cur.next&&cur.next){
        let t=cur.next;
        cur.next=cur.next.next;
        t.next=cur;
        pre.next=t;
        pre=cur;
        cur=pre.next;
    }
    return dummy.next;
};
let list={
    val:1,
    next:null
}
console.log(swapPairs(list))
