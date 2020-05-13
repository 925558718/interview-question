var deleteDuplicates = function(head) {
    if(!head) return null;
    let pre=head;
    let cur=head.next;
    while(cur){
        if(pre.val==cur.val){
            pre.next=cur.next;
            cur=cur.next;
        }else{
            pre=pre.next;
            cur=cur.next;
        }
    }
    return head;
};
let list={
    val:1,
    next:{
        val:1,
        next:{
            val:2,
            next:{
                val:3,
                next:{
                    val:3,
                    next:null
                }
            }
        }
    }
}
console.log(JSON.stringify(deleteDuplicates(list)));
