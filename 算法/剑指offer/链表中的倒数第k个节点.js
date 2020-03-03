function FindKthToTail(head, k)
{
    // write code here
    let slow=head,fast=head;
    for(let i=0;i<k;i++){
        fast=fast.next;
    }
   
    
    
    while(fast){
        fast=fast.next;
        slow=slow.next;
    }
    return slow;
}
let list={
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:null
        }
    }
}
console.log(FindKthToTail(list,3));
