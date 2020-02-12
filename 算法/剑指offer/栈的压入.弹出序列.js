var validateStackSequences = function(pushed, popped) {
    let s=[];
    let index=0;
    for(let i=0;i<pushed.length;i++){
            s.push(pushed[i]);
            while(s.length!=0&&s[s.length-1]==popped[index]){
                s.pop();
                index++;
            }
    }
    return s.length==0;
};