function Mirror(root)
{
    // write code here
    if (!root) return null;
    let t=root.right;
    root.right=root.left;
    root.left=t;
    Mirror(root.left);
    Mirror(root.right);
}
