/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    let copy = new Node(node.val)
    let stack = [node]
    let map = new Map();
    while (stack.length) {
        let t = stack.pop();
        let fatherCopy = map.get(t)
        for (let i = 0; i < t.neighbors.length; i++) {
            let child = new Node(t.neighbors[i].val)
            fatherCopy.neighbors.push(child)
            if (!map.has(t.neighbors[i])) {
                map.set(t.neighbors[i], child)
                stack.push(t.neighbors[i])
            }
        }
    }
    return copy;
};