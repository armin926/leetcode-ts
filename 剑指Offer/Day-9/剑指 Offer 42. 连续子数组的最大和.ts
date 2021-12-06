
/*
 * 题目名称： 剑指 Offer 42. 连续子数组的最大和

 * 题目描述： 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
 *           要求时间复杂度为O(n)。
 * 
 * 示例：     输入: nums = [-2,1,-3,4,-1,2,1,-5,4]  输出: 6  解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。 

 * 解题思路： 动态规划法。将连续元素的和相加并存储起来，如果当前元素的前一位大于 0 则进行累加，如果当前元素的前一位小于等于 0，则直接与最大值比较
*/
const maxSubArray = (nums: number[]): number => {
  let maxNum = nums[0] // 初始化最大值
  for(let i=1;i<nums.length;i++) {
    if(nums[i-1]>0) { // 若 nums[i-1] > 0，则 nums[i] += nums[i-1] ， 再与 maxNum 进行比较
      nums[i] += nums[i-1]
    }
    // 否则，直接与 maxNum 进行比较
    maxNum = Math.max(maxNum, nums[i])
  }
  return maxNum
}