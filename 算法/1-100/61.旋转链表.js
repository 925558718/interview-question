var rotateRight = function (head, k) {
  if (!head) return null;
  let cur = head;
  let len = 0;
  while (cur) {
    cur = cur.next;
    len++;
  }
  k %= len;
  let fast = head;
  let slow = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  console.log(fast, slow);

  fast.next = head;
  fast = slow.next;
  slow.next = null;
  return fast;
};
rotateRight(list, 2);
