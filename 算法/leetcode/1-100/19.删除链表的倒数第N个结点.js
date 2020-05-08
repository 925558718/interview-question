function ListNode(val) {
     this.val = val;
     this.next = null;
}
var removeNthFromEnd = function(head, n) {
    let dummy=new ListNode(-1);
    dummy.next=head;
    let cur=dummy;
    let pre=dummy;
    for(let i=0;i<n;i++){
        cur=cur.next;
    }
    while(cur.next){
        cur=cur.next;
        pre=pre.next;
    }
    pre.next=pre.next.next;
    
    
    return dummy.next
};
let list={
    val:1,
    next:null
}
console.log(removeNthFromEnd(list,1));
