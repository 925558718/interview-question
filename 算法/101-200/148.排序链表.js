var sortList = function (head) {
    if (!head || !head.next) return head;
    let slow = head, fast = head, pre = head;
    while (fast && fast.next) {
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    pre.next = null;
    return merge(sortList(head), sortList(slow))
};
function merge(l1, l2) {
    let dummy = new ListNode(-1);
    let cur = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    if (l1) cur.next = l1;
    if (l2) cur.next = l2;
    return dummy.next;
}
