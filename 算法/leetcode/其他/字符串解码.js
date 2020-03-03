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
let i=0;
var decodeString = function(s) {
    return help(s,i);
};
function help(s,obj){
    let res="";
    while(i<s.length&&s[i]!=']'){
        if(s[i]>'9'||s[i]<'0'){
            res+=s[i++];
        }else{
            let cut=0;
            while(i<s.length&&s[i]>='0'&&s[i]<='9'){
                cut=cut*10+s[i++];
            }
            i++;
            let t=help(s,i);
            i++;
            while(cut--){
                res+=t;
            }
        }
    }
    return res;
}
console.log(decodeString('1[a]2[b]'));
