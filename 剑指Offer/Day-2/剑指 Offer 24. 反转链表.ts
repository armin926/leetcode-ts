/*
 * 题目名称： 剑指 Offer 24. 反转链表

 * 题目描述： 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * 
 * 问题分析： 将1->2->3->4->5->null变为5->4->3->2->1->null，遍历链表，我们需要将当前节点的next指针改为前一个节点。
 *           由于节点没有引用前一个节点，所以我们需要事先存储其前一个节点。在更改引用之后还要存储后一个节点。最后返回新的头引用
 * 
 * 解题思路： 1、初始化前一个节点
 *           2、遍历链表，将当前节点的 next 改为上面声明的 prev，将 prev 前移为当前节点，而当前节点则存储为后一个节点
 *           3、根据存储的 prev 返回
*/


//! Definition for singly-linked list.
class ListNodeFun {
  val: number
  next: ListNodeFun | null
  constructor(val?: number, next?: ListNodeFun | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseList(head: ListNodeFun | null): ListNodeFun | null {
  let prev: ListNodeFun|null = null // 声明当前节点的前一个节点
  let cur = head // 初始化当前节点
  while(cur) {
    // 遍历链表
    const { next } = cur // 拿到后一个节点
    cur.next = prev // 将当前节点的后一个节点改为前一个节点
    prev = cur // 将前一个节点改为当前节点
    cur = next // 将当前节点指向后一节点
  }
  return prev
}