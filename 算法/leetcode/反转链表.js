// var reverseList = function(head) {
//     if(!head||!head.next) return head;
//     let newHead=reverseList(head.next);
//     head.next.next=head;
//     head.next=null;
//     return newHead;
// };

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
