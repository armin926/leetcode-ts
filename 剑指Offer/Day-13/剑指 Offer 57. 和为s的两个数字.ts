/*
 * 题目名称： 剑指 Offer 57. 和为s的两个数字

 * 题目描述： 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
 * 
 * 示例：    输入：nums = [2,7,11,15], target = 9
 *          输出：[2,7] 或者 [7,2]
 *
 * 解题思路： 双指针。1、定义双指针
 *                  2、遍历数组：若两数相加大于目标值，则右指针自减
 *                              若两数相加小于目标值，则左指针自加
 *                              若两数相加等于目标值，则返回两数
*/

const twoSum = (nums: number[], target: number): number[] => {
  // 定义双指针
  let left = 0, right = nums.length - 1
  while (left < right) {
      // 左右指针对应的数值之和
      const sum = nums[left] + nums[right]
      // 如果所得值与目标值相等，则返回对应的两个数
      if (sum === target) return [nums[left], nums[right]]
      // 如果所得值比目标值大，则右指针自减
      else if (sum > target) right--
      // 反之，左指针自加
      else left++
  }
  return null
}