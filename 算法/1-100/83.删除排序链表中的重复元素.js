var deleteDuplicates = function (head) {
    if (!head) return null;
    let pre = head;
    let cur = head.next;
    while (cur) {
        if (pre.val == cur.val) {
            pre.next = cur.next;
            cur = cur.next;
        } else {
            pre = pre.next;
            cur = cur.next;
        }
    }
    return head;
};

console.log(JSON.stringify(deleteDuplicates(list)));
