function ListNode(val) {
    this.val = val;
    this.next = null;

}
var partition = function (head, x) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = dummy;
    let cur = head;
    while (pre.next && pre.next.val < x) pre = pre.next;
    cur = pre;
    while (cur.next) {
        if (cur.next.val < x) {
            let t = cur.next;
            cur.next = t.next;
            t.next = pre.next;
            pre.next = t;
            pre = pre.next;
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
};