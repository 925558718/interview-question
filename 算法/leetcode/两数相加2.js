function ListNode(val) {
    this.val = val;
    this.next = null;
 }
var addTwoNumbers = function(l1, l2) {
    let s1=[],s2=[];
    while(l1){
        s1.push(l1.val);
        l1=l1.next;
    }
    while(l2){
        s2.push(l2.val);
        l2=l2.next;
    }
    let sum=0;
    let res=new ListNode(0);
    while(s1.length!=0||s2.length!=0){
        if(!s1.length==0) sum+=s1.pop().val;
        if(!s2.length==0) sum+=s2.pop().val;
        res.val=sum%10;
        let head=new ListNode(Math.floor(sum/10));
        head.next=res;
        res=head;
        sum/=10;
    }
    return res.val==0?res.next:res;
};