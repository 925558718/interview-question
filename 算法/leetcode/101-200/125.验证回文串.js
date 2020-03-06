var isPalindrome = function(s) {
    let left=0,right=s.length-1;
    while(left<right){
        console.log(s[left]<'a'&&s[left]>'z');
        while((s[left]<'a'&&s[left]>'z')||(s[left]<'A'&&s[left]>'Z')) left++;
        while((s[right]<'a'&&s[right]>'z')||(s[right]<'A'&&s[right]>'Z')) right--;
        if(s[left].toLowerCase()!=s[right].toLowerCase()) return false;
        else{
            left++;right--;
        }
        
    }
    return true;
};
isPalindrome("A man, a plan, a canal: Panama")