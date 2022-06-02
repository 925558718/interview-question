var Trie = function () {
    this.children = {}
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.children;
    for (const ch of word) {
        if (!node[ch]) {
            node[ch] = {}
        }
        node = node[ch]
    }
    node.isEnd = true
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    const node = this.searchPrefix(word)
    return node !== undefined && node.isEnd !== undefined
};

Trie.prototype.searchPrefix = function (prefix) {
    let node = this.children;
    for (const ch of prefix) {
        if (ch === '.') {

        }
        if (!node[ch]) {
            return false;
        }
        node = node[ch]
    }
    return node
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    return this.searchPrefix(prefix)
};


var WordDictionary = function () {
    this.trie = new Trie()
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    this.trie.insert(word)
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    this.trie.searchPrefix(word)
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */