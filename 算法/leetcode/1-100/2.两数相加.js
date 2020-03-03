var addTwoNumbers = function(l1, l2) {
    let dummy=new ListNode(-1);
    let cur=dummy;
    let count=0;
    while(l1||l2){
        let x=l1?l1.val:0;
        let y=l2?l2.val:0;
        if(l1) l1=l1.next;
        if(l2) l2=l2.next;
        let sum=x+y+count;
        cur.next=new ListNode(sum%10);
        count=sum>9?1:0;
        cur=cur.next;
    }
    if(count) cur.next=new ListNode(count)
    return dummy.next;
};