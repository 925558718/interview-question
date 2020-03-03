// function ListNode(val) {
//      this.val = val;
//      this.next = null;
// }
// var swapPairs = function(head) {
//     let dummy=new ListNode(-1);
//     let pre=dummy;
//     dummy.next=head;
//     while(pre.next&&pre.next.next){
//         let t=pre.next.next;
//         pre.next.next=t.next;
//         t.next=pre.next;
//         pre.next=t;
//         pre=t.next;
//     }
//     return dummy.next;
// };
var swapPairs = function(head) {
    if(!head||!head.next) return head;
    let t=head.next;
    head.next=swapPairs(head.next.next);
    t.next=head;
    return t;
};