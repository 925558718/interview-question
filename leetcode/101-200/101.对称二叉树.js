// var isSymmetric = function(root) {
//     if(!root) return true;
//     let help=function(left,right){
//         if(!left&&!right) return true;
//         if((!left&&right)||(left&&!right)||(left.val!=right.val)) return false;
//         return help(left.left,right.right)&&help(left.right,right.left);
//     }
//     return help(root.left,root.right)
// };
var isSymmetric = function (root) {
    let q1 = [];
    let q2 = [];
    q1.push(root.left);
    q2.push(root.right);
    while (q1.length != 0 && q2.length != 0) {
        let n1 = q1.shift();
        let n2 = q2.shift();
        if (!n1 && !n2) continue;
        if ((n1 && !n2) || (!n1 && n2)) return false;
        if (n1.val != n2.val) return false;
        q1.push(n1.left);
        q1.push(n1.right);
        q2.push(n2.right);
        q2.push(n2.left);
    }
    return true;
};