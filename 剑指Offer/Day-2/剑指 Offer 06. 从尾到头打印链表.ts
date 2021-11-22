/*
 * 题目名称： 剑指 Offer 06. 从尾到头打印链表

 * 题目描述： 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * 
 * 问题分析： 可以遍历链表，将每个元素从数组的头部插入以实现倒序输出
 * 
 * 解题思路： 1、判断 head 是否为空，若为空则直接 return
 *           2、遍历链表，将对应的val从数组头部插入，并指向下一个节点
 *           3、当 head.next 为空时我们就将 新组成的数组返回
*/


//! Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reversePrint(head: ListNode | null): number[] {
  if (!head) return // 若 head 为空 直接return
  let reverseArr: number[] = [] // 初始化翻转的数组
  while (head) {
    // 遍历链表，将val插入 reverseArr 的头部已实现倒序排列，且将节点指向下一节点
    reverseArr.unshift(head.val)
    head = head.next
  }
  return reverseArr
}