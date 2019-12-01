function EntryNodeOfLoop(pHead)
{
    // write code here
    if(!pHead||!pHead.next) return null;
    let pre=pHead;
    let cur=pHead;
    pre=pre.next;
    cur=cur.next.next;
    while (cur){
        if(cur==pre) break;
        pre=pre.next;
        cur=cur.next.next;
    }
    let p=pHead;
    while (true){
        if (p==cur) break;
        p=p.next;
        cur=cur.next;
    }
    return p;
}
