/*
 * 题目名称： 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面

 * 题目描述： 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数在数组的前半部分，所有偶数在数组的后半部分。
 * 
 * 示例：    输入：nums = [1,2,3,4]
 *          输出：[1,3,2,4] 
 *          注：[3,1,2,4] 也是正确的答案之一。
 *
 * 解题思路： 双指针原地修改。1、定义双指针
 *                         2、左指针找偶数，右指针找奇数  
 *                         3、交换左右指针的值
 *                         4、循环寻找
*/

const exchange = (nums: number[]): number[] => {
  // 定义双指针
  let [left,right] = [0, nums.length-1]
  while(left < right) {
    // 奇数，继续向右查找，直到找到偶数
    while(left < right && nums[left] & 1) left++
    // 偶数，继续向左查找，直到找到奇数
    while(left < right && !(nums[right] & 1)) right--
    // 交换奇偶数
    [nums[left], nums[right]] = [nums[right], nums[left]]
  }
  return nums
}