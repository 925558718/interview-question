var connect = function (root) {
  if (!root) return null;
  let q1 = [];
  let res = [];
  q1.push(root);
  while (q1.length != 0) {
    let len = q1.length;
    let out = [];
    for (let i = 0; i < len; i++) {
      let n = q1.shift();
      out.push(n);
      if (n.left) q1.push(n.left);
      if (n.right) q1.push(n.right);
    }
    for (let i = 0; i < out.length - 1; i++) {
      out[i].next = out[i + 1];
    }
    out[out.length - 1].next = null;
    res.push(out);
  }
  return root;
};

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let dummy = new Node(-1),
    cur = dummy,
    res = root;
  while (root) {
    if (root.left) {
      cur.next = root.left;
      cur = cur.next;
    }
    if (root.right) {
      cur.next = root.right;
      cur = cur.next;
    }
    root = root.next;
    if (!root) {
      cur = dummy;
      root = dummy.next;
      dummy.next = null;
    }
  }
  return res;
};
