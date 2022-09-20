/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (!head || !head.next) return head;
    let pre = head, cur = head.next;
    while (cur && cur.next) {
        let t = cur.next;
        cur.next = t.next
        t.next = pre.next;
        pre.next = t;
        pre = t
        cur = cur.next
    }
    return head
};