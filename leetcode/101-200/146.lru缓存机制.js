
function node(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}
function dList() {
    this.head = new node(0, 0);
    this.tail = new node(0, 0);
    this.size = 0;
    this.head.next = this.tail;
    this.tail.prev = this.head;
}
dList.prototype.addFirst = function (node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
    this.size++;
}
dList.prototype.remove = function (node) {


    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
}
dList.prototype.removeLast = function () {
    let last = this.tail.prev;
    this.remove(last);
    return last;
}
var LRUCache = function (capacity) {
    this.dist = new dList();
    this.map = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1;
    let value = this.map.get(key).value;
    this.put(key, value)
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let n = new node(key, value);
    if (this.map.has(key)) {
        this.dist.remove(this.map.get(key))
    } else {
        if (this.dist.size >= this.capacity) {
            let last = this.dist.removeLast();
            this.map.delete(last.key);
        }
    }
    this.dist.addFirst(n);
    this.map.set(key, n);
};
let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2)


cache.put(3, 3)
console.log(cache.get(1));
