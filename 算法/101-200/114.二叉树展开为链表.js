var flatten = function (root) {
  if (!root) return null;
  if (root.left) flatten(root.left);
  if (root.right) flatten(root.right);
  let t = root.right;
  root.right = root.left;
  root.left = null;
  while (root.right) root = root.right;
  root.right = t;
  return root;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let cur = root;
  while (cur) {
    if (cur.left) {
      let p = cur.left;
      while (p.right) p = p.right;
      p.right = cur.right;
      cur.right = cur.left;
      cur.left = null;
    }
    cur = cur.right;
  }
  return root;
};
