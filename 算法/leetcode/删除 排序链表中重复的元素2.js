function ListNode(val) {
 this.val = val;
 this.next = null;
 }
var deleteDuplicates = function(head) {
    if(!head||!head.next) return head;
    let dummy=new ListNode(-1);
    dummy.next=head;
    let pre=dummy;
    
    while(pre.next){
        let cur=pre.next;
        while(cur.next&&cur.next.val==cur.val){
            cur=cur.next;
        }
        if(cur!=pre.next) pre.next=cur.next;
        else pre=pre.next;
    }
    return dummy.next;
};
let list={
    val:1,
    next:{
        val:1,
        next:{
            val:2,
            next:null
        }
    }
}






console.log(JSON.stringify(deleteDuplicates(list)));
