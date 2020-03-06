var zigzagLevelOrder = function(root) {
    let s1=[root];
    let s2=[];
    let res=[];
    while(s1.length!=0||s2.length!=0){
        while(s1.length!=0){
            let len1=s1.length;
            out=[];
            for(let i=0;i<len1;i++){
                let t=s1.pop();
                out.push(t.val);
                if(t.right) s2.push(t.right);
                if(t.left) s2.push(t.left);
            }
        }
        res.push(out);
        out=[];
        while(s2.length!=0){
            let len2=s2.length;
            res.push(out);
            out=[];
            for(let i=0;i<len2;i++){
                let t=s2.pop();
                out.push(t.val);
                if(t.right) s1.push(t.right);
                if(t.left) s1.push(t.left);
            }
        }
        res.push(out);
        out=[];
    }
    return res;
};