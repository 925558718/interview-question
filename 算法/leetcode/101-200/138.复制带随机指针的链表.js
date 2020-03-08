function Node(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
 };
var copyRandomList = function(head) {
    if(!head) return null;
    let res=new Node(head.val,null,null);
    let node=res,cur=head.next;
    let map=new Map();
    map.set(head,res);
    while(cur){
        let t=new Node(cur.val,null,null);
        node.next=t;
        map.set(cur,t);
        node=node.next;
        cur=cur.next;
    }
    node=res;
    cur=head;
    while(cur){
        node.random=map.get(cur.random);
        node=node.next;
        cur=cur.next;
    }
    return res;
};