
/*
 * 题目名称： 剑指 Offer 53 - II. 0～n-1中缺失的数字

 * 题目描述： 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。
 *           在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
 *           示例：输入: [0,1,3] 输出: 2
 * 
 * 解题思路： 采用二分查找法
 * 
*/
const missingNumber = (nums: number[]): number => {
  let left:number = 0 // 左边界
  let right:number = nums.length - 1 // 右边界
  while(left <= right) {
      const mid = Math.floor((left + right)/2) // 中间值
      if(mid === nums[mid]) {
          // 如果中间值等于对应索引，则代表缺失的数据不可能出现在中间值的左边，所以左边界为 mid + 1 
          left = mid + 1
      } else if(mid < nums[mid]) {
          // 如果中间值小于对应索引，则代表缺失的数据不可能在右边， 所以右边界为 mid - 1 
          right = mid - 1
      }
  }
  return left
};