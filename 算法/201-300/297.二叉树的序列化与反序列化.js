/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

let tree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    }, right: null
}
var serialize = function (root) {
    if (!root) return 'null'
    let left = serialize(root.left)
    let right = serialize(root.right)
    return `${root.val},${left},${right}`
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {Array} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    const arr = data.split(',')
    console.log(arr);
    const help = () => {
        if (data.length === 0) return null
        let t = data.shift()
        if (!t) return t
        let node = new TreeNode(t)
        node.left = deserialize(data)
        node.right = deserialize(data)
        return node
    }

};

const root = serialize(tree)
console.log(root);
let res = deserialize(root)
console.log(res);
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */