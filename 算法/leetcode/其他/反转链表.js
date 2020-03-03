// var reverseList = function(head) {
//     if(!head||!head.next) return head;
//     let newHead=reverseList(head.next);
//     head.next.next=head;
//     head.next=null;
//     return newHead;
// };
var reverseList = function(head){
    if(!head||!head.next) return head;
    let pre=null,cur=head;
    while(cur){
        let t=cur.next;
        cur.next=pre;
        pre=cur;
        cur=t;
    }
    return pre;
}

let root = {
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:null
        }
    }
}
console.log(reverseList(root));
