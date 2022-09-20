var detectCycle = function (head) {
    if (!head) return -1;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
        if (fast == slow) break;
    }
    if (!fast || !fast.next) return null;
    slow = head;
    while (fast == slow) {
        fast = fast.next;
        slow = slow.next;
    }

    return fast;
};