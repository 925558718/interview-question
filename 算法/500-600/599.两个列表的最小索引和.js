/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    let map=new Map();
    let res=[]
    let min=Number.MAX_VALUE
    for(let i=0;i<list1.length;i++) {
        map.set(list1[i],i)
    }
    for(let i=0;i<list2.length;i++) {
        let sum=map.get(list2[i]) + i
        if(map.has(list2[i]) && sum < min) {
            res=[list2[i]]
            min=sum
        }else if(map.has(list2[i]) && sum == min) {
            res.push(list2[i])
        }
    }
    return res;
};