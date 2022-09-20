class Router {
    constructor(mode) {
        this.routes = {}
        this.mode=mode;
        this.hash = ''
        window.addEventListener('hashchange')
    }
    add(path, cb) {
        this.routes[path] = cb || function () { }
    }
    freshRoute() {
        this.hash = location.hash.slice(1) || '/'
        this.routes[this.hash]()
    }
}