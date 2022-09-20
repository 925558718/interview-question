var reverseKGroup = function(head, k) {
    if(!head) return head;
    let dummy=new ListNode(-1);
    dummy.next=head;
    let len=0;
    let pre=dummy
    let cur=pre;
    while(cur=cur.next) len++;
    while(len>=k){
        cur=pre.next;
        for(let i=0;i<k-1;i++){
            let t=cur.next;
            cur.next=t.next;
            t.next=pre.next;
            pre.next=t;
        }
        pre=cur;
        len-=k;
    }
    return dummy.next;
};
