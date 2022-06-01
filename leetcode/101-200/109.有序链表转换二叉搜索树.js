function ListNode(val) {
    this.val = val;
    this.next = null;
}
var sortedListToBST = function (head) {
    if (!head) return null;
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = dummy;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        pre = pre.next;
        slow = slow.next;
    }
    pre.next = null;
    let node = new ListNode(slow.val);
    node.left = sortedListToBST(head);
    node.right = sortedListToBST(slow.next);
    return node;
};
