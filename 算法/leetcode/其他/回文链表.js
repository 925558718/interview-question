function ListNode(val) {
    this.val = val;
    this.next = null
}
// var isPalindrome = function(head) {
//     if(!head||!head.next) return true;
//     let dummy=new ListNode(-1);
//     dummy.next=head;
//     let cur=head,slow=head;
//     pre=dummy;
//     while(cur&&cur.next){
//         cur=cur.next.next;
//         slow=slow.next;
//         pre=pre.next;
//     }
//     pre.next=null;
//     let flag=null;
//     while(slow){
//         let t=slow.next;
//         slow.next=flag;
//         flag=slow;
//         slow=t;
//     }
//     console.log(flag,head);
    
//     while(flag&&head){
//         if(flag.val!=head.val) return false;
//         flag=flag.next;
//         head=head.next;
//     }
//     return true
    
    
// };

let list={
    val:1,
    next:{
        val:2,
        next:{
            val:2,
            next:{
                val:1,
                next:null
            }
        }
    }
}
console.log(isPalindrome(list));

