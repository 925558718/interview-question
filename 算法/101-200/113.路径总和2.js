// let res=[];

// var pathSum = function(root, sum) {
//     help(root,sum,[]);
//     return res;
// };
// function help(root,sum,out){
//     if(!root) return false;
//     if(sum-root.val==0&&!root.left&&!root.right){
//         res.push(out);
//         return;
//     }
//     hasPathSum(root.left,sum-root.val,out.concat(root.val));
//     hasPathSum(root.right,sum-root.val,out.concat(root.val));
// }

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
 * @param {number} targetSum
 * @return {number[][]}
 */
let res = [];
let map = new Map();
function getPaths(node) {
    let paths = []
    while (node) {
        paths.unshift(node.val)
        node = map.get(node)
    }
    res.push(paths)
}
var pathSum = function (root, targetSum) {
    let stack = [root]
    let sum = [0]
    while (stack.length) {
        let t = stack.pop();
        let lastVal = sum.pop();
        let result = t.val + lastVal
        if (!t.left && !t.right && result === targetSum) {
            getPaths(t)
        } else {
            if (t.left) {
                map.set(t.left, t)
                stack.push(t.left)
                sum.push(result)
            }
            if (t.right) {
                map.set(t.right, t)
                stack.push(t.right)
                sum.push(result)
            }
        }

    }
    return res;
};