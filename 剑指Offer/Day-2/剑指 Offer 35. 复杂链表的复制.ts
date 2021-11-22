
/*
 * 题目名称： 剑指 Offer 35. 复杂链表的复制

 * 题目描述： 请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。
 *
 * 问题分析：利用回溯的方式，让每个节点的拷贝操作相互独立。对于当前节点，我们首先要进行拷贝，然后我们进行当前节点的后继节点和当前节点的随机指针指向的节点拷贝，
 *          拷贝完成后将创建的新节点的指针返回，即可完成当前节点的两指针的赋值
 * 
 * 解题思路：用哈希表记录每一个节点对应新节点的创建情况：键是原节点，值是复制的节点
*/


const copyRandomList = (head, cachedNode = new Map()) => {
  if(!head) return null
  if(!cachedNode.has(head)) {
    cachedNode.set(head, {val:head.val})
    Object.assign(cachedNode.get(head), {next: copyRandomList(head.next, cachedNode), random: copyRandomList(head.random, cachedNode)})
  }
  return cachedNode.get(head)
}
