function Node(val){
    this.val=val;
    this.next=null;
}
var mergeKLists = function(lists) {
    if(lists.length==0) return null;
    let l1=lists[0];
    for(let i=1;i<lists.length;i++){
        l1=merge(l1,lists[2]);
    }
    return li;
};
let merge=function(l1,l2){
    if(!l1&&!l2) return null;
    let dummy=new Node(-1);
    let cur=dummy;
    while(l1&&l2){
        if(l1.val<l2.val){
            cur.next=new Node(l1.val);
            l1=l1.next;
        }else{
            cur.next=new Node(l2.val);
            l2=l2.next;
        }
        cur=cur.next;
    }
    cur.next=l1?l1:l2;
    return dummy.next;
}