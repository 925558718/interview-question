function renderData(data) {
    data.forEach(function (item) {
        console.log(item);
    })
}
function arrayAdapter(data) {
    if (typeof data!=='object'){
        return []
    }
    if(Object.prototype.toString.call(data)==='[object Array]'){
        return data
    }

    var temp=[];

    for (let item in data){
        if (data.hasOwnProperty(item)){
            temp.push(data[item])
        }
    }
    return temp;
}
let data={
    0:'a',
    1:'b',
    2:'c'
}
console.log(renderData(arrayAdapter(data)))
