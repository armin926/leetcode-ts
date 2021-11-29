/*
 * 题目名称： 剑指 Offer 03. 数组中重复的数字

 * 题目描述： 找出数组中重复的数字。
 *           在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 *           数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 * 
 * 解题思路： 通过题意，我们可以利用哈希表来实现：1、遍历数组，若当前元素不存在于哈希表，则添加到哈希表即可
 *                                            2、若当前数字在哈希表中已存在，则返回结果
 * 
*/

const findRepeatNumber = (nums: number[]): number => {
  let map = new Map()
  for(let i of nums) {
    if(map.has(i)) {
      return i
    } else {
      map.set(i, 1)
    }
  }
  return null
}