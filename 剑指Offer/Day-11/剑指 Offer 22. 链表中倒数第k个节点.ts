/*
 * 题目名称： 剑指 Offer 22. 链表中倒数第k个节点

 * 题目描述： 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
 *           例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。
 * 
 * 示例：     给定一个链表: 1->2->3->4->5, 和 k = 2.
 *           返回链表 4->5.

 * 解题思路： 快慢指针。1、定义快慢指针，初始都指向链表头部
 *                    2、快指针先走k步
 *                    3、再两指针一起走，直到快指针走到头为止
 *                    4、此时的慢指针指向的就是倒数第k个节点
 *                    5、返回慢指针即可
*/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const getKthFromEnd = (head: ListNode | null, k: number): ListNode | null => {
  // 定义快慢指针
  let fast:ListNode,slow:ListNode;
  // 初始化时同时指向 head
  fast = slow = head
  // 快指针先走 k 步
  while(k--) {
    fast = fast.next
  }
  // 快慢指针同时走
  while(fast) {
    fast = fast.next
    slow = slow.next
  }
  // 返回慢指针所指的值
  return slow
}