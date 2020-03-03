var hasCycle = function(head) {
    
    let cur=head;
    let slow=head
    while(cur&&cur.next){
        cur=cur.next.next;
        slow=slow.next;
        if(cur==slow) return true;
        
    }
    return false;
};