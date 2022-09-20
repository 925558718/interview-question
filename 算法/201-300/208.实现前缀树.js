var Trie = function () {
    this.children = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.children;
    for (let char of word) {
        if (!node[char]) {
            node[char] = {}
        }
        node = node[char]
    }
    node.isEnd = true
    console.log(this.children);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    const node = this.startsWith(word)
    return node !== undefined && node.isEnd
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.children;
    for (let char of prefix) {
        if (node[char]) {
            node = node[char]
        }
    }
    return node
};

var obj = new Trie()
obj.insert('apple')
var param_2 = obj.search('apple')
console.log(param_2);
