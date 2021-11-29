
/*
 * 题目名称： 剑指 Offer 53 - I. 在排序数组中查找数字 I

 * 题目描述： 统计一个数字在排序数组中出现的次数。
 *           示例：输入: nums = [5,7,7,8,8,10], target = 8
 *           输出: 2
 * 
 * 解题思路： 采用二分查找法
 * 
*/

// 工具函数，用于实现二分查找
const binarySearch = (nums: number[], target: number, lower: boolean) => {
  let left:number = 0, right:number = nums.length - 1, ans:number = nums.length
  while(left<=right) {
    const mid = Math.floor((left + right)/2) // 中间值
    if(nums[mid] > target || (lower && nums[mid] >= target)) {
      // 如果lower为true则代表是获取左边界值，当 mid 所在索引值大于等于 目标值时，右边界减 1 且边界值等于 mid，
      right = mid - 1
      ans = mid
    } else {
      // 否则 左边界等 mid + 1
      left = mid + 1
    }
  }
  return ans
}

const search = (nums: number[], target: number): number => {
  let ans:number = 0 // 目标值重复出现的次数
  const leftIdx:number = binarySearch(nums, target, true) // 左边界
  const rightIdx:number = binarySearch(nums, target, false) - 1 // 右边界
  if(leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
    // 当左边界小于等于右边界且右边界小于数组长度且左右边界都等于目标值时
    // 重复出现的次数 = 右边界 - 左边界 + 1
    ans = rightIdx - leftIdx + 1
  }
  return ans
}