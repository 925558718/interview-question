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
// var connect = function (root) {
//     if (!root) return null
//     let stack = [root]
//     while (stack.length) {
//         let len = stack.length;
//         for (let i = 0; i < len; i++) {
//             let t = stack.pop();
//             if (i < (len - 1)) {
//                 t.next = stack[stack.length - 1]
//             }
//             if (t.left) stack.unshift(t.left)
//             if (t.right) stack.unshift(t.right)
//         }
//     }
//     return root;
// };


var connect = function(root) {
    if(!root) return null;
    if(root.left) root.left.next=root.right;
    if(root.right) root.right.next=root.next ? root.next.left : null; 
    connect(root.left)
    connect(root.right)
    return root;
};