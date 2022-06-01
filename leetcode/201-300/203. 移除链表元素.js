function ListNode(val) {
         this.val = val;
         this.next = null;
     }
var removeElements = function(head, val) {
    if(!head) return null;
    let dummy=new ListNode(-1);
    dummy.next=head;
    let pre=dummy;
    while(pre&&pre.next){
        if(pre.next.val==val){
            pre.next=pre.next.next;
        }
        pre=pre.next;
    }
    return dummy.next;
};