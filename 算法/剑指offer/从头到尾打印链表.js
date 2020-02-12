function printListFromTailToHead(head)
{
    // write code here
    let res=[];
    function help(head) {
        if (!head) return;
        help(head.next)
        res.push(head.val);
    }
    help(head)
    return res;
}