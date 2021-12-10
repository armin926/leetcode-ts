
/*
 * 题目名称： 剑指 Offer 25. 合并两个排序的链表

 * 题目描述： 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 * 
 * 示例：    输入：1->2->4, 1->3->4
 *          输出：1->1->2->3->4->4

 * 解题思路： 双指针：边遍历边合并。定义虚拟节点，最后返回虚拟节点的下一个节点。定义 p1,p2 分别指向两个链表头部，一起遍历
 *           p1 和 p2 哪个对应的值小，就连接到哪个链表，最后直接连接到不为 null 的那一个链表
*/
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const mergeTwoLists = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  const res = new ListNode(-1) // 定义虚拟节点，最后返回虚拟节点的下一个节点
  let p = res // 定义 p 指向虚拟节点
  let [p1, p2] = [l1, l2] // 定义 p1,p2 分别指向两个链表头部
  // 当 p1,p2 都有值的时候
  while (p1 && p2) {
    // 如果 p1  指向的值小，则 p 指向 p1 的值
    // p1 右移
    // 否则 p 指向 p2 的值，p2 右移
    if (p1.val < p2.val) {
      p.next = p1
      p1 = p1.next
    } else {
      p.next = p2
      p2 = p2.next
    }
    // 记得 p 也要右移
    p = p.next
  }
  // 到最后退出循环， p1,p2 有且只有一个是 null
  // 那么另一个不是 null 的还没有连接到 p 上
  // 再把 p 连接到不是 null 的那个
  p.next = p1 ? p1 : p2
  // 返回虚拟节点的下一个节点
  return res.next
}