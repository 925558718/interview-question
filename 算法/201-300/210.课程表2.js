function findOrder(numCourses, prereq) {
    let graph = new Array(numCourses)
    let res=[]
    for (let i = 0; i < numCourses; i++) {
        graph[i] = new Array();
    }
    let ins = new Array(numCourses).fill(0)
    for (let a of prereq) {
        graph[a[1]].push(a[0])
        ins[a[0]]++;
    }
    let queue = []
    for (let i = 0; i < numCourses; i++) {
        if (ins[i] == 0) queue.push(i)
    }
    while (queue.length) {
        let t = queue.pop();
        res.push(t)
        for (let a of graph[t]) {
            --ins[a]
            if (ins[a] == 0) queue.push(a)
        }
    }
    return res.length !== numCourses ? [] : res;
}