// var isValidBST = function(root) {
//     return help(root,-Number.MAX_VALUE,Number.MAX_VALUE)
// };
// function help(root,mn,mx){
//     if(!root) return true;
//     if(root.val<=mn||root.val>=mx) return false; 
//     return isValidBST(root.left,mn,root.val)&&isValidBST(root.right,root.val,mx) ;
// }
var isValidBST = function(root) {
    if(!root) return true;
    let arr=[];
    inorder(root,arr);
    for(let i=1;i<arr.length;i++){
        if(arr[i]<=arr[i-1]) return false;
    }
    return true;
};
function inorder(root,arr){
    if(!root) arr.push(root.val);
    inorder(root.left,arr);
    arr.push(root.val);
    inorder(root.right,arr);
}