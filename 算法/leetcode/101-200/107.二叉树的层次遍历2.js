var levelOrderBottom = function (root) {
    if (!root) return []
    let q1 = [];
    let res = [];
    q1.push(root);
    while (q1.length != 0) {
        let len = q1.length;
        let out = []
        for (let i = 0; i < len; i++) {
            let n = q1.shift();
            out.push(n.val);
            if (n.left) q1.push(n.left);
            if (n.right) q1.push(n.right);
        }
        res.unshift(out)
    }
    return res;
};