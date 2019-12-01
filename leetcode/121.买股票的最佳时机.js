var maxProfit = function(prices) {
    let minPrice=Number.MAX_VALUE;
    let res=0;
    for (let i=0;i<prices.length;i++){
        if (prices[i]<minPrice){
            minPrice=prices[i];
        }else if(prices[i]-minPrice>res){
            res=prices[i]-minPrice;
        }
    }
    return res;
};
console.log(maxProfit([7,1,5,3,6,4]))
