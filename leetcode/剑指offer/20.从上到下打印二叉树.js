function PrintFromTopToBottom(root)
{
    // write code here
    if (!root) return [];
    let res=[];
    let q=[root];
    while (q.length!==0){

        let t=q.shift();
        res.push(t.val);
        if (t.left) q.push(t.left);
        if (t.right) q.push(t.right);
    }
    return res;
}
