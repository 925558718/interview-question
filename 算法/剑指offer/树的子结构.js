var isSubStructure = function(pRoot1, pRoot2) {
    // write code here
    if(!pRoot1) return false;
    if(!pRoot2) return false;
    if(same(pRoot1,pRoot2)) return true;
    return isSubStructure(pRoot1.left,pRoot2)||isSubStructure(pRoot1.right,pRoot2);
    
}
function same(left,right){
    if(!right) return true;
    if(!left) return false;
    console.log(left.val,right.val)
    if(left.val!=right.val) return false;
    return same(left.left,right.left)&&same(left.right,right.right);
    
}


