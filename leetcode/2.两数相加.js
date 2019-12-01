function node(val) {
    this.val=val;
    this.next=null;
}
var addTwoNumbers = function(l1, l2) {
    let count=0;
    let dummy=new node();
    let pointer=dummy;
    while (l1||l2||count){
        let n1=l1?l1.val:0;
        let n2=l2?l2.val:0;
        let t=n1+n2+count;
        if (t>9){
            pointer.next=new node(t%10);
            count=1;
        }else{
            pointer.next=new node(t);
            count=0;
        }
        if (l1) l1=l1.next;
        if (l2) l2=l2.next;
        pointer=pointer.next;
    }
    return dummy.next;
};
