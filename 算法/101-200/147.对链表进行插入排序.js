function ListNode(val) {
    this.val = val;
    this.next = null;
}
var insertionSortList = function (head) {
    if (!head) return head;
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = head,
        cur = head.next;
    while (cur) {
        if (pre.val <= cur.val) {
            pre = pre.next;
        } else {
            let start = dummy;
            while (start.next.val <= cur.val) {
                start = start.next;
            }
            pre.next = cur.next;
            cur.next = start.next;
            start.next = cur;
        }
        cur = pre.next;
    }
    return dummy.next;
};
