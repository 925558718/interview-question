function canFinish(numCourses, prereq) {
    let graph = new Array(numCourses)
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
        for (let a of graph[t]) {
            console.log(a);
            --ins[a]
            if (ins[a] == 0) queue.push(a)
        }
    }

    for (let i = 0; i < numCourses; i++) {
        if (ins[i] != 0) return false;
    }
    return true;
}
function canFinish2(numCourses, prereq) {
    let graph = new Array(numCourses)
    for (let i = 0; i < numCourses; i++) {
        graph[i] = new Array();
    }
    let visit = {}
    for (let a of prereq) {
        graph[a[1]].push(a[0])
    }
    for (let i = 0; i < numCourses; i++) {
        if (!help(graph, visit, i)) return false;
    }
    return true;
}
function help(graph, visit, i) {
    if (visit[i] === -1) return false;
    if (visit[i] === 1) return true;
    visit[i] = -1
    for (let a of graph[i]) {
        if (!help(graph, visit, a)) return false;
    }
    visit[i] = 1;
    return true;
}