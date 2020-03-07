var ladderLength = function(beginWord, endWord, wordList) {
    let dist=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let s=new Set(wordList);
    if(!s.has(endWord)) return 0;
    let q=[beginWord];
    let res=0;
    while(q.length!=0){
        let len=q.length;
        for(let i=0;i<len;i++){
            let word=q.shift();
            if(word==endWord) return res+1;
            for(let i=0;i<word.length;i++){
                let newWord=word.split("");
                for(let idx=0;idx<dist.length;idx++){
                    newWord[i]=dist[idx];
                    let str=newWord.join("")
                    if(s.has(str)&&str!=word){
                        q.push(str);
                        s.delete(str);
                    }
                }
            }
        }
        res++;
    }
    return 0;
};
console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"]));
console.log();
