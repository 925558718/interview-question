function GetNext(pNode)
{
    // write code here
    if (!pNode) return null;
    if (pNode.right){
        pNode=pNode.right;
        while (pNode.left){
            pNode=pNode.left
        }
        return pNode
    }else{
        while (pNode.next){
            if (pNode.next.left===pNode) return pNode.next;
            pNode=pNode.next
        }
    }

}
