var reverseKGroup = function(head, k) {
    let cur=head;
    let count=0;
    while(cur&&count!=k){
        cur=cur.next;
        count++;
    }
    if(count==k){
        cur=reverseKGroup(cur,k);
        while(count){
            count++;
            let temp=head.next;
            head.next=cur;
            cur=head;
            head=temp;
        }
        head=cur;
    }
    return head;
};
