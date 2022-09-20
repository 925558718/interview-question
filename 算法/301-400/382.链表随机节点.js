/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let res = this.head.val;
  let cur = this.head;
  let j = 1;
  while (cur) {
    if (Math.floor(Math.random() * j) === 0) res = cur.val;
    j++;
    cur = cur.next;
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
