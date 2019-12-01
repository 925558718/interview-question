function FindKthToTail(head, k)
{
    // write code here
    if (!head||k==0) return null;
    let cur=head;
    let pre=head;
    for (let i=0;i<k-1;i++){
        if(!cur.next) return null;
        cur=cur.next;
    }
    while (cur&&cur.next){
        cur=cur.next;
        pre=pre.next;
    }
    return pre;
}
