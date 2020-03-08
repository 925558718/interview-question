var reorderList = function(head) {
    if(!head) return null;
    let slow=head,fast=head;
    while(fast.next&&fast.next.next){
        fast=fast.next.next;
        slow=slow.next;
    }
    let h2=slow.next;
    slow.next=null;
    let pre=null;
    while(h2){
        let n=h2.next;
        h2.next=pre;
        pre=h2;
        h2=n;
    }
    while(pre&&head){
        let next=head.next;
        head.next=pre;
        pre=pre.next;
        head.next.next=next;
        head=next;
    }

};