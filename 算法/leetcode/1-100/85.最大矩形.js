var maximalRectangle = function(matrix) {
    let res=0;
    let height=new Array(matrix[0].length).fill(0)
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            height[j]=matrix[i][j] == '0' ? 0 : (1 + height[j]);
            
        }
        console.log(height)
        res=Math.max(res,help(height))
    }
    return res;
};
function help(height){
    let res=0;
    for(let i=1;i<height.length;i++){
        let minH=height[i];
        if(height[i]<height[i-1]){
            for(let j=i;j>=0;j--){
                minH=Math.min(height[j],minH)
                let area=minH*(i-j+1);
                res=Math.max(res,area)
            }
        }
    }
    return res;
}