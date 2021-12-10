/*
 * 题目名称： 剑指 Offer 52. 两个链表的第一个公共节点

 * 题目描述： 输入两个链表，找出它们的第一个公共节点。
 * 
 * 示例：    输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
 *          输出：Reference of the node with value = 8
 *          输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。
 *          从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
 *          在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
 *
 * 解题思路： 快慢指针。1、遍历得到两个链表的长度，以及长度差diff
 *                    2、将慢指针 slow 指向较长链表，快指针 fast 指向较短链表
 *                    3、slow 向前移动 diff 个距离
 *                    4、slow 和 fast 同时向前移动，每次移动一个距离。若存在公共节点，那么它们一定会遇上。
*/
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let node = headA // 初始化节点，让他指向 headA
  let lengthA = 0 // 初始化 headA 链表长度
  while(node) {
    // 遍历节点，得到 headA 链表的长度
    ++lengthA
    node = node.next
  }
  // 如果 len 为 0 则可直接返回 null
  if(!lengthA) return null
  
  node = headB // 遍历完 A 链表后 我们将节点指向 B 链表
  let lengthB = 0 // 初始化 B 链表长度
  while(node) {
    // 遍历节点，得到 B 链表的长度
    ++lengthB
    node = node.next
  }
  // 若 len 为 0，则直接返回 null
  if(!lengthB) return null
  // 初始化数据：diff 代表两链表的长度差，slow 指向较长链表，fast 指向较短链表
  let diff = 0, slow, fast;
  if(lengthA > lengthB) {
    // 当 A 链表长度 大于 B 链表长度时
    slow = headA
    fast = headB
    diff = lengthA - lengthB
  } else {
    // 当 B 链表长度 大于 A 链表长度时
    slow = headB
    fast = headA
    diff = lengthB - lengthA
  }

  while(diff--) {
    // 长链表先移动 diff 个距离
    slow = slow.next
  }
  while (slow !== fast) {
    // 此时两个链表同时移动，若存在公共点，则将 slow 返回
    slow = slow.next
    fast = fast.next
  }
  return slow
}
