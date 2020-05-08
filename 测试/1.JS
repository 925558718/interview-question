
function resolve(npmList) {
    const res = []
    function dfs(npmList) {
        if (npmList.length === 0) return
        npmList.forEach((npm) => {
            const { name, require = [] } = npm
            dfs(require)
            !res.includes(name) && res.push(name)
        })
        return
    }
    dfs(npmList)
    return res
}


var tree2 = {
  name: 'page.js',
  require: [{
    name: 'A.js',
    require: [{
      name: 'B.js',
      require: [{
        name: 'C.js'
      }]
    }]
  }, {
    name: 'D.js',
    require: [{
      name: 'C.js'
    }, {
      name: 'E.js'
    }]
  }]
}
console.log(resolve(tree2.require));
