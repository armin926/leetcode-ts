
/*
 * 题目名称： 剑指 Offer 18. 删除链表的节点

 * 题目描述： 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
 *           返回删除后的链表的头节点。
 * 
 * 示例：     输入: head = [4,5,1,9], val = 5
 *           输出: [4,1,9]
 *           解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.

 * 解题思路： 哨兵节点。一般是不保存任何数据的节点。
*/
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const deleteNode = (head: ListNode | null, val: number): ListNode | null => {
  let pre = new ListNode(-1) // 创建哨兵节点
  pre.next = head // 哨兵节点连接到 head
  let node = pre // 定义指针，最开始指向虚拟节点
  // 遍历链表
  while(node?.next) {
    if(node.next.val === val) {
      // 如果下一个值等于 val，则删除下一个值
      node.next = node.next.next
      break
    }
    node = node.next
  }
  return pre.next
}