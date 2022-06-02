/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    let res = []
    let s = [];
    let p = root
    while (p || s.length) {
        if (p) {
            res.push(p.val)
            s.push(p)
            p = p.left;
        } else {
            let t = s.pop();
            t = t.right
        }
    }
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {Array} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if(data.length===0) return null
    let t=data.shift()
    if(!t) return t
    let node=new TreeNode(t)
    node.left=deserialize(data)
    node.right=deserialize(data)
    return node
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */