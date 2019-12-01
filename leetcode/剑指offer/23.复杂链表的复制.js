function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead)
{
    // write code here
    if (pHead==null) return null;
    let cur=pHead;
    while (cur){
        let clone=new RandomListNode(cur.label)
        let nextNode=cur.next;
        cur.next=clone;
        clone.next=nextNode;
        cur=nextNode;
    }
}
