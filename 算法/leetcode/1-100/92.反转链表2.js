function ListNode(val) {
    this.val = val;
    this.next = null;
}
function help(m, n, root) {
    let dummy = new ListNode(-1);
    dummy.next = root;
    let cur;
    let pre = dummy;
    for (let i = 0; i < m - 1; i++) {
        pre = pre.next;
    }
    cur = pre.next;


    for (let i = m; i < n; i++) {
        let t = cur.next;
        cur.next = t.next;
        t.next = pre.next;
        pre.next = t;
    }
    return dummy.next;
}
let root = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}
console.log(JSON.stringify(help(0, 3, root)));

