// var decodeString = function(s) {
//     let n=s.length;
//     let t="",cnt=0;
//     let s_str=[],s_num=[];
//     for(let i=0;i<n;i++){
//         if(s[i]>='0'&&s[i]<='9'){
//             cnt=Number(cnt*10+s[i])
//         }else if(s[i]=='['){
//             s_str.push(t);
//             s_num.push(cnt);
//             cnt=0;
//             t="";
//         }else if(s[i]==']'){
//             let len=s_num.pop();
//             for(let j=0;j<len;j++){
//                 s_str[s_str.length-1]+=t;
//             }
//             t=s_str.pop();
//         }else{
//             t+=s[i];
//         }
//     }
    
//     return s_str.length==0?t:s_str[s_str.length-1];
// };
var decodeString = function(s) {
    let obj={i:0}
    return help(s,obj);
};
function help(s,obj){
    let res="",len=s.length;
    while(obj.i<len&&s[obj.i]!=']'){
        if(s[obj.i]>'9'||s[obj.i]<'0'){
            res+=s[obj.i++];
        }else{
            let cnt=0;
            while(s[obj.i]>='0'&&s[obj.i]<='9'){
                cnt=Number(10*cnt+s[obj.i++])
            }
            obj.i++;
            let t=help(s,obj);
            obj.i++;
            while(cnt--){
                res+=t;
            }
        }
    }
    return res;
}
console.log(decodeString('1[a]'));
