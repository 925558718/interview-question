function ListNode(val) {
    this.val=val;
    this.next=null;
}
var removeNthFromEnd = function(head, n) {
    let dummy=new ListNode();
    dummy.next=head;
    let p1=dummy;
    let p2=dummy;
    for (let i=0;i<=n;i++){
        p1=p1.next;
    }
    while (p1!==null){
        p1=p1.next;
        p2=p2.next;
    }

        p2.next=p2.next.next;

    return dummy.next
};
let list={
    val:1,
    next:null
}
console.log(removeNthFromEnd(list,1))
