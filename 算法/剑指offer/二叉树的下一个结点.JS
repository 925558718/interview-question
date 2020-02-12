function GetNext(pNode)
{
    // write code here
    if(pNode.right){
        let t=pNode.right;
        while(t.left) t=t.left;
        return t;
    }
    while(pNode.next&&pNode!=pNode.next.left){
        pNode=pNode.next;
    }
    return pNode.next;
}