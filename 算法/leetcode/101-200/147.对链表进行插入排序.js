function ListNode(val) {
         this.val = val;
         this.next = null; 
     }
var insertionSortList = function(head) {
    let dummy=new ListNode(-1),cur=dummy;
    while(head){
        let t=cur.next;
        cur=dummy;
        while(cur.next&&cur.next.val>head.val){
            cur=cur.next;
        }
        head.next=cur.next;
        cur.next=head;
        head=t;
    }
    return dummy.next;
}