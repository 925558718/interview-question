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
console.log(JSON.stringify(help(0, 3, root)));
