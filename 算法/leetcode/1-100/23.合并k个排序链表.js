/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    return help(lists, 0, lists.length-1)
};
let merge = function (l1, l2) {
    if (!l1 && !l2) return null;
    let dummy = new ListNode(-1);
    let cur = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            cur.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next = l1 ? l1 : l2;
    return dummy.next;
}
function help(lists, start, end) {
    if (start == end) return lists[start]
    if (start > end) return null;
    let mid = (start + end) >> 1;
    return merge(help(lists, start, mid), help(lists, mid+1,end));
}