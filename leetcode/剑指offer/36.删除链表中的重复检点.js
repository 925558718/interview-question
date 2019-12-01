function ListNode(val) {
    this.val=val;
    this.next=null;
}
function deleteDuplication(pHead)
{
    // write code here

    let dummy=new ListNode("head");
    dummy.next=pHead;
    let pre=dummy;
    let cur=pHead.next;
    while (cur&&cur.next){
        if (cur.val===cur.next.val){
            while (cur.val===cur.next.val&&cur.next) cur=cur.next;
            if (cur.next){
                cur=cur.next;
            }
            pre.next=cur;
        }else{
            pre=cur;
            cur=cur.next;
        }
    }
    return dummy.next
}
let list={
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:{
                val:3,
                next:{
                    val:4,
                    next:{
                        val:4,
                        next:{
                            val:5,
                            next:null
                        }
                    }
                }
            }
        }
    }
}
console.log(JSON.stringify(deleteDuplication(list)))
