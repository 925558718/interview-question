function Node(val) {
    this.val = val;
    this.next = null;
  }
  function help(head) {
    if (!head.next) return head;
    const newHead = help(head.next);
      head.next.next=head;
      head.next=null
    return newHead;
  }