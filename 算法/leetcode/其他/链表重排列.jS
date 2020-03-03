var reorderList = function(head) {
    if(!head) return null;
    let cur=head;
    let slow=head;
    while(cur.next&&cur.next.next){
        cur=cur.next.next;
        slow=slow.next;
    }
    let mid=slow.next;
    slow.next=null;
    let last=mid,pre=null;
    while(last){
        let next=last.next;
        last.next=pre;
        pre=last;
        last=next;
    }
    while(pre&&head){
        let next=head.next;
        head.next=pre;
        pre=pre.next;
        head.next.next=next;
        head=next;
    }
};