/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  if(!head || !head.next) return true;
  let slow=head;
  let fast=head;
  while(fast.next && fast.next.next) {
      slow=slow.next;
      fast=fast.next.next;
  }
  let sec=slow.next;
  slow.next=null;
  let head2=null;
  while(sec) {
      let t=sec.next;
      sec.next=head2;
      head2=sec
      sec=t;
  }
  while(head && head2) {
      if(head.val===head2.val) {
          head=head.next;
          head2=head2.next;
      }else {
          return false;
      }
  }
  return true
};