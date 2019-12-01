function Print(pRoot)
{
    // write code here
    if(!pRoot) return [];
    let s1=[pRoot];
    let s2=[];
    let res=[];
    let out=[];
    while (s1.length!=0||s2.length!=0){
        while (s1.length!=0){
            let t=s1.pop();
            out.push(t.val);
            if (t.left) s2.push(t.left);
            if (t.right) s2.push(t.right);
        }
        if (out.length!=0) res.push(out);
        out=[];
        while (s2.length!=0){
            let t=s2.pop();
            out.push(t.val);
            if (t.right) s1.push(t.right);
            if (t.left) s1.push(t.left);
        }
        if (out.length!=0) res.push(out);
        out=[];
    }
    return res;
}
let root={
    val:1,
    left:{
        val:2,
        left:{
            val:4,
            left:null,
            right:null
        },
        right:{
            val:5,
            left:null,
            right:null
        }
    },
    right:{
        val:3,
        left:{
            val:4,
            left:null,
            right:null
        },
        right:{
            val:7,
            left:null,
            right:null
        }
    }
}
console.log(Print(root))
